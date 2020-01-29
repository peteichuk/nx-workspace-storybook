
import { OneLibModule } from '../one-lib.module';
import { OneLibComponent } from './one-lib.component';
import { SharedModule } from '@nx-workspace-name/shared';

export default {
  title: 'OneLibComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [SharedModule]
  },
  component: OneLibComponent,
  props: {

  }
});
