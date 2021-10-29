import {RouteLiterals} from './route-literals.model';

export class Routes {
  static onboarding = ['/', RouteLiterals.onboarding];
  static login = ['/', RouteLiterals.onboarding, RouteLiterals.login];
  static register = ['/', RouteLiterals.onboarding, RouteLiterals.register];

  static userOverview = ['/', RouteLiterals.userOverview];
  static orders = ['/', RouteLiterals.userOverview, RouteLiterals.orders];
  static userProfile = ['/', RouteLiterals.userOverview, RouteLiterals.userProfile];
  static orderComplete = ['/', RouteLiterals.userOrderDetail, RouteLiterals.userOrderComplete];
  static userOrderCreate = ['/', RouteLiterals.userOverview, RouteLiterals.orders, RouteLiterals.userOrderCreate];
  static userOrderCreateSummary = ['/', RouteLiterals.userOverview, RouteLiterals.orders, RouteLiterals.userOrderCreate,
    RouteLiterals.userOrderCreateSummary];

  static adminOverview = ['/', RouteLiterals.adminOverview, RouteLiterals.adminOrders];
  static adminCreateProduct = ['/', RouteLiterals.adminOverview, RouteLiterals.adminProducts, RouteLiterals.adminProductCreate];

  static userOrderDetail(orderId: string) {
    return ['/', RouteLiterals.userOverview, RouteLiterals.orders, RouteLiterals.userOrderDetail, orderId];
  }

  static adminOrderDetail(orderId: string) {
    return ['/', RouteLiterals.adminOverview, RouteLiterals.orders, RouteLiterals.userOrderDetail, orderId];
  }
}
