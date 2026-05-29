export type ThemeId = "executive-black";

export type PlanFeatureTone = "neutral" | "positive" | "negative";

export interface PlanFeature {
  text: string;
  tone?: PlanFeatureTone;
}

export interface PricingPlan {
  id: string;
  title: string;
  caption?: string;
  description?: string;
  price: number;
  currency: "₽";
  features: PlanFeature[];
  badge?: string;
  highlight?: boolean;
  purchaseUrl?: string;
}

export interface DeviceVariant {
  id: string;
  label: string;
  plans: PricingPlan[];
}

export type CategoryKind = "device-tabs" | "plans";

interface CategoryBase {
  id: string;
  title: string;
  subtitle: string;
  iconKey: IconKey;
  accentImage?: string;
}

export interface DeviceTabsCategory extends CategoryBase {
  kind: "device-tabs";
  devices: DeviceVariant[];
}

export interface PlansCategory extends CategoryBase {
  kind: "plans";
  plans: PricingPlan[];
}

export type Category = DeviceTabsCategory | PlansCategory;

export interface Benefit {
  title: string;
  description: string;
  iconKey: IconKey;
}

export type IconKey =
  | "certificate"
  | "gamepad"
  | "shield"
  | "apple"
  | "device"
  | "lock"
  | "trust"
  | "spark"
  | "wave";
