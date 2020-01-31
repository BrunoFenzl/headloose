import { DynamicComponentSchema } from '../../../dynamic-renderer/dynamic-components.interfaces';
import { TextInputDefaults } from 'src/app/content/dynamic-components/text-input/text-input.schema';
import { Injectable } from '@angular/core';
import { TextareaComponent } from './textarea/textarea.component';
import { TextareaDefaults } from './textarea/textarea.schema';
import { NumberInputDefaults } from './number-input/number-input.schema';
import { SwitchDefaults } from './switch/switch.schema';
import { SelectDefaults } from './select/select.schema';

@Injectable({
  providedIn: 'root',
})
export class SchemaGeneratorService {

  private cssClassesRegex: RegExp;
  private keyValueRegex: RegExp;
  private activeSchema: DynamicComponentSchema;

  constructor() {
    this.cssClassesRegex = /((\w+)(-))*(\w+)/g;
    this.keyValueRegex = /(([0-9a-z\-\_äöüÄÖÜß!?])+ ?([0-9a-z\-\_äöüÄÖÜß!?])+ ?):( ?\w+ ?([0-9a-z\-\_äöüÄÖÜß!?])+)/g;
  }

  generateFieldsfromSchema(schema: DynamicComponentSchema): DynamicComponentSchema[] {
    this.activeSchema = schema;
    // Object for holding our new schema
    const fieldsSchema: DynamicComponentSchema[] = [];
    // These keys should not be rendered as input fields
    const ignoreKeys = ['@id', '@type', 'children', 'parent', 'modelOptions'];
    // Keys with values of these types should also not be rendered
    const ignoreTypes = ['undefined', 'symbol', 'function'];

    Object.keys(schema)
      .filter(key => ignoreKeys.indexOf(key) === -1) // skip these
      .filter(key => ignoreTypes.indexOf(typeof schema[key]) === -1) // these too
      .forEach((key) => {
        const valueType = typeof schema[key];
        // const field: DynamicComponentSchema = new (this.inputTypesMap[valueType])({ '@id': key, name: key });
        let field: DynamicComponentSchema;

        switch (valueType) {
          case 'object':
            field = new TextareaDefaults({ '@id': key, name: key });
            if (key === 'options') {
              // convert options array into a string with the format 'label:value'
              field.model = this.stringifyOptions(schema.options);
            } else if (key === 'classes') {
              // convert classes array into a string with the form 'classname1 classname2 classname3'
              field.model = this.stringifyClassnames(schema.classes);
            }
            break;
          case 'string':
            if (key === 'model' && schema.modelOptions !== undefined) {
              field = new SelectDefaults({ '@id': key, label: key, name: key, model: schema.model, options: schema.modelOptions });
            } else {
              field = new TextInputDefaults({ '@id': key, label: key, name: key, model: schema[key] });
            }
            break;
          case 'number':
            field = new NumberInputDefaults({ '@id': key, label: key, name: key, model: schema[key] });
            break;
          case 'boolean':
            field = new SwitchDefaults({ '@id': key, label: key, name: key, model: schema[key] });
            break;
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

  generateSchemaFromFields(formValues: any[]): DynamicComponentSchema {
    const schema = { ...this.activeSchema };

    Object.keys(formValues)
      .forEach((key) => {
        if (schema.hasOwnProperty(key)) {
          const valueType = typeof schema[key];
          switch (valueType) {
            case 'object':
              if (key === 'classes') {
                schema[key] = this.parseCssClassnames(formValues[key]);
              } else if (key === 'options') {
                schema[key] = this.parseOptions(formValues[key]);
              }
              break;
            case 'string':
              schema[key] = formValues[key].trim();
              break;
            case 'number':
              schema[key] = parseInt(formValues[key], 10);
              break;
            case 'boolean':
              schema[key] = (formValues[key] === 'true' || formValues[key] === true) ? true : false;
              break;
          }
        }
      });
    return schema;
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
