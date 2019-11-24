import { DynamicComponentFactory } from '../../dynamic-components.interfaces';
import { DynamicComponentRegistryService } from './dynamic-component-registry.service';

export function dynamicComponentRegistryServiceFactory(
  existingInstance: DynamicComponentRegistryService | null,
  dynamicComponentFactories: Array<DynamicComponentFactory<any>>,
): DynamicComponentRegistryService {
  return existingInstance || new DynamicComponentRegistryService(dynamicComponentFactories);
}
