import {
  Component,
  Output,
  Input,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { User } from '../../auth/models/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent {
  @Output() logout = new EventEmitter<any>();
  @Input() user: User;

  logoutUser() {
    this.logout.emit();
  }
}
