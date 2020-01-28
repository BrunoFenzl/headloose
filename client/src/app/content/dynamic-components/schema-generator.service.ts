import { DynamicComponentSchema } from '../../../dynamic-renderer/dynamic-components.interfaces';
import { TextInputDefaults } from 'src/app/content/dynamic-components/text-input/text-input.schema';
import { Injectable } from '@angular/core';
import { TextareaComponent } from './textarea/textarea.component';
import { TextareaDefaults } from './textarea/textarea.schema';

@Injectable({
  providedIn: 'root',
})
export class SchemaGeneratorService {

  private inputTypesMap: any;

  private cssClassesRegex: RegExp;
  private keyValueRegex: RegExp;

  constructor() {
    this.cssClassesRegex = /((\w+)(-))*(\w+)/g;
    this.keyValueRegex = /(([0-9a-z\-\_äöüÄÖÜß!?])+ ?([0-9a-z\-\_äöüÄÖÜß!?])+ ?):( ?\w+ ?([0-9a-z\-\_äöüÄÖÜß!?])+)/g;

    this.inputTypesMap = {
      string: TextInputDefaults,
      number: TextInputDefaults,
      boolean: TextInputDefaults,
      object: TextareaDefaults,
    };
  }

  generateFieldsfromSchema(schema: DynamicComponentSchema): DynamicComponentSchema[] {
    console.log('generateFieldsfromSchema', schema);
    // Object for holding our new schema
    const fieldsSchema: DynamicComponentSchema[] = [];
    // These keys should not be rendered as input fields
    const ignoreKeys = ['@id', '@type', 'children', 'parent'];
    // Keys with values of these types should also not be rendered
    const ignoreTypes = ['undefined', 'symbol', 'function'];

    Object.keys(schema)
      .filter(key => ignoreKeys.indexOf(key) === -1) // skip these
      .filter(key => ignoreTypes.indexOf(typeof schema[key]) === -1) // these too
      .forEach((key) => {
        const valueType = typeof schema[key];
        const field: DynamicComponentSchema = new (this.inputTypesMap[valueType])({ '@id': key });

        if (valueType === 'object') {
          if (key === 'options') {
            // convert options array into a string with the format 'label:value'
            field.model = this.stringifyOptions(schema.options);
          } else if (key === 'classes') {
            // convert classes array into a string with the form 'classname1 classname2 classname3'
            field.model = this.stringifyClassnames(schema.classes);
          }
        }
        fieldsSchema.push(field);
      });

    return fieldsSchema;
  }

  stringifyOptions(options: any[]): string {
    return options.reduce((acc, curr) => {
      const v = `${curr.label}:${curr.value}`;
      return acc = (acc === '') ? v : `${acc},\n${v}`;
    }, '');
  }

  stringifyClassnames(css: string[]): string {
    return css.reduce((acc, curr) => {
      return acc = (acc === '') ? curr : `${acc} ${curr}`;
    }, '');
  }

  parseOptions(options: string): any[] {
    if (!options) {
      return [];
    }

    return options
      .match(this.keyValueRegex)
      .map(str => {
        const arr = str.split(':');
        return {
          label: arr[0].trim(),
          value: arr[1].trim().toLowerCase(),
        };
      });
  }

  parseCssClassnames(str: string): string[] {
    if (str === '') {
      return [];
    }

    // regex finds based ' .my .fancy .css.class-nam3e this-too-oo '
    return str
      .match(this.cssClassesRegex) // split
      .map(el => el.trim());
  }
}
