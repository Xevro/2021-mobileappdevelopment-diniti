import {RouteLiterals} from './route-literals.model';

export class Routes {
  static onboarding = ['/', RouteLiterals.onboarding];
  static login = ['/', RouteLiterals.onboarding, RouteLiterals.login];
  static register = ['/', RouteLiterals.onboarding, RouteLiterals.register];
  static resetPassword = ['/', RouteLiterals.onboarding, RouteLiterals.resetPassword, RouteLiterals.reset];
  static termsAndConditions = ['/', RouteLiterals.termsAndConditions];

  static userOverview = ['/', RouteLiterals.userOverview];
  static orders = ['/', RouteLiterals.userOverview, RouteLiterals.orders];
  static userProfile = ['/', RouteLiterals.userOverview, RouteLiterals.userProfile];
  static orderComplete = ['/', RouteLiterals.userOverview, RouteLiterals.userOrderDetail, RouteLiterals.userOrderComplete];
  static userOrderCreate = ['/', RouteLiterals.userOverview, RouteLiterals.orders, RouteLiterals.userOrderCreate];
  static userOrderCreateSummary = ['/', RouteLiterals.userOverview, RouteLiterals.orders, RouteLiterals.userOrderCreate,
    RouteLiterals.userOrderCreateSummary];

  static adminOverview = ['/', RouteLiterals.adminOverview, RouteLiterals.adminOrders];
  static adminSettings = ['/', RouteLiterals.adminOverview, RouteLiterals.adminSettings];
  static adminProducts = ['/', RouteLiterals.adminOverview, RouteLiterals.adminProducts];
  static adminCreateProduct = ['/', RouteLiterals.adminOverview, RouteLiterals.adminProducts, RouteLiterals.adminProductCreate];

  static adminCustomerDetail(customerId: string) {
    return ['/', RouteLiterals.adminOverview, RouteLiterals.adminCustomers, RouteLiterals.adminCustomersDetail, customerId];
  }

  static userOrderDetail(orderId: string) {
    return ['/', RouteLiterals.userOverview, RouteLiterals.orders, RouteLiterals.userOrderDetail, orderId];
  }

  static adminOrderDetail(orderId: string) {
    return ['/', RouteLiterals.adminOverview, RouteLiterals.orders, RouteLiterals.userOrderDetail, orderId];
  }

  static userProductDetail(productId: string) {
    return ['/', RouteLiterals.userOverview, RouteLiterals.orders, RouteLiterals.userProduct, productId];
  }

  static adminProductDetail(productId: string) {
    return ['/', RouteLiterals.adminOverview, RouteLiterals.adminProducts, RouteLiterals.adminProductDetail, productId];
  }
}
