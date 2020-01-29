import { SharedModule } from '../shared.module';
import { ContentComponent } from './content.component';

export default {
  title: 'ContentComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [SharedModule]
  },
  component: ContentComponent,
  props: {
    title: 'hey',
    items: [4,5,6]
  }
});
