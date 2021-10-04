import { RouteLiterals } from './route-literals.model';

export class Routes {
  static onboarding = ['/', RouteLiterals.onboarding];
  static login = ['/', RouteLiterals.onboarding, RouteLiterals.login];
  static register = ['/', RouteLiterals.onboarding, RouteLiterals.register];
  static userOverview = ['/', RouteLiterals.userOverview];
  static orders = ['/', RouteLiterals.orders];
  static orderComplete = ['/', RouteLiterals.orderComplete];
}
