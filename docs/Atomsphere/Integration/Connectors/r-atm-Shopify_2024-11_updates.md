# 2024-11 updates 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="2e0aa475-9df3-40c3-a029-2f39eebf8dee"/>
</head>


## Order Object 

|   Action      | Object      | Field      | Hierarchy |
|---------------|-------------|------------|-----------|
| Deleted       |  Order      |  Default   |  billing_address |
| Deleted       |  Order      |  Latitude   |  customer.addresses |
| Deleted       |  Order      |  Longitude   |  customer.addresses|
| Deleted       |  Order      |  value_type   |  Metafield |
| Deleted       |  Order      |  amount   |  transactions|
| Deleted       |  Order      |  kind   |  transactions|
| Deleted       |  Order      |  Status   |  transactions|
| Deleted       |  Order      |  avs_result_code   |  refunds.transactions.payment_details|
| Deleted       |  Order      |  credit_card_bin   |  refunds.transactions.payment_details|
| Deleted       |  Order      |  credit_card_company   |  refunds.transactions.payment_details|
| Deleted       |  Order      |  credit_card_number   |  refunds.transactions.payment_details|
| Deleted       |  Order      |  Cvv_result_code   |  refunds.transactions.payment_details|
| Deleted       |  Order      |  avs_result_code   |  payment_details|
| Deleted       |  Order      |  credit_card_bin   |  payment_details
| Deleted       |  Order      |  credit_card_company   |  payment_details|
| Deleted       |  Order      |  credit_card_number   |  payment_details|
| Deleted       |  Order      |  Cvv_result_code   |  payment_details|
| Deleted       |  Order      |  is_removed   |  shipping_lines|
| Deleted       |  Order      |  address1   |  customer.addresses|
| Deleted       |  Order      |  address2   |  customer.addresses|
| Deleted       |  Order      |  city   |  customer.addresses|
| Deleted       |  Order      |  company   |  customer.addresses|
| Deleted       |  Order      |  country   |  customer.addresses|
| Deleted       |  Order      |  country_code   |  customer.addresses|
| Deleted       |  Order      |  default   |  customer.addresses|
| Deleted       |  Order      |  first_name   |  customer.addresses|
| Deleted       |  Order      |  last_name   |  customer.addresses|
| Deleted       |  Order      |  latitude   |  customer.addresses|
| Deleted       |  Order      |  longitude   |  customer.addresses|
| Deleted       |  Order      |  name   |  customer.addresses|
| Deleted       |  Order      |  phone   |  customer.addresses|
| Deleted       |  Order      |  province   |  customer.addresses|
| Deleted       |  Order      |  province_code   |  customer.addresses|
| Deleted       |  Order      |  zip   |  customer.addresses|
| Deleted       |  Order      |  reference   | - |
| Deleted       |  Order      |  landing_site_ref   | - |
| Deleted       |  Order      |  Fulfillment_status   | - |
| Deleted       |  Order      |  gateway   | - |
| Deleted       |  Order      |  send_receipt   | - |
| Deleted       |  Order      |  send_fulfillment_receipt   | - |
| Deleted       |  Order      |  contact_email   | - |
| Deleted       |  Order      |  processing_method   | - |
| Deleted       |  Order      |  device_id   | - |

|   Action      | Object      | Field      | Hierarchy |
|---------------|-------------|------------|-----------|
| Added         |  Order      |  cancel_reason   | - |
| Added         |  Order      |  cancelled_at   | - |
| Added         |  Order      |  cart_token   | - |
| Added         |  Order      |  Checkout_token   | - |
| Added         |  Order      |  Closed_at   | - |
| Added         |  Order      |  merchant_of_record_app_id   | - |
| Added         |  Order      |  phone   | - |
| Added         |  Order      |  po_number   | - |
| Added         |  Order      |  presentment_currency   | - |
| Added         |  Order      |  processed_at   | - |
| Added         |  Order      |  type   | metafields |
| Added         |  Order      |  id   | - |
| Added         |  Order      |  Currency   | Customer |
| Added         |  Order      |  marketing_opt_in_level   | Customer |
| Added         |  Order      |  password   | Customer |
| Added         |  Order      |  password_confirmation   | Customer |
| Added         |  Order      |  phone   | Customer |
| Added         |  Order      |  Country_name   | Customer.Addresses|
| Added         |  Order      |  Customer_id   | Customer.Addresses |
| Added         |  Order      |  id   | Customer.Addresses |
| Added         |  Order      |  Email_marketing_consent   | customer.email_marketing_consent |
| Added         |  Order      |  State   | customer.email_marketing_consent |
| Added         |  Order      |  Opt_in_level   | customer.email_marketing_consent |
| Added         |  Order      |  Consent_updated_at   | customer.email_marketing_consent |
| Added         |  Order      |  key   | customer.metafield |
| Added         |  Order      |  Namespace   | customer.metafield |
| Added         |  Order      |  Value   | customer.metafield |
| Added         |  Order      |  type   | customer.metafield |
| Added         |  Order      |  consent_collected_from   | customer.email_marketing_consent |
| Added         |  Order      |  opt_in_level   | customer.email_marketing_consent |
| Added         |  Order      |  consent_updated_at   | customer.email_marketing_consent |
| Added         |  Order      |  consent_collected_from   | customer.email_marketing_consent |
| Added         |  Order      |  estimated_taxes   | fulfillments |
| Added         |  Order      |  created_at   | fulfillments |
| Added         |  Order      |  id   | fulfillments |
| Added         |  Order      |  name   | fulfillments |
| Added         |  Order      |  order_id   | fulfillments |
| Added         |  Order      |  updated_at   | fulfillments |
| Added         |  Order      |  fulfillment_line_item_id   | fulfillments |
| Added         |  Order      |  admin_graphql_api_id   | fulfillments.line_items |
| Added         |  Order      |  amount   | fulfillments.line_items.discount_allocations.amount_set.presentment_money |
| Added         |  Order      |  currency_code   | fulfillments.line_items.discount_allocations.amount_set.presentment_money |
| Added         |  Order      |  amount   | fulfillments.line_items.discount_allocations.amount_set.presentment_money |
| Added         |  Order      |  currency_code   | fulfillments.line_items.discount_allocations.amount_set.presentment_money |
| Added         |  Order      |  discount_application_index   | fulfillments.line_items.discount_allocations |
| Added         |  Order      |  amount   | fulfillments.line_items.price_set.presentment_money |
| Added         |  Order      |  currency_code   | fulfillments.line_items.price_set.presentment_money |
| Added         |  Order      |  amount   | fulfillments.line_items.price_set.presentment_money |
| Added         |  Order      |  currency_code   | fulfillments.line_items.price_set.presentment_money |
| Added         |  Order      |  name   | fulfillments.line_items.properties |
| Added         |  Order      |  value   | fulfillments.line_items.properties |
| Added         |  Order      |  amount   | fulfillments.line_items.tax_lines.price_set.presentment_money |
| Added         |  Order      |  currency_code   | fulfillments.line_items.tax_lines.price_set.presentment_money |
| Added         |  Order      |  amount   | fulfillments.line_items.tax_lines.price_set.shop_money |
| Added         |  Order      |  currency_code   | fulfillments.line_items.tax_lines.price_set.shop_money |
| Added         |  Order      |  channel_liable   | fulfillments.line_items.tax_lines |
| Added         |  Order      |  amount   | fulfillments.line_items.total_discount_set.presentment_money |
| Added         |  Order      |  currency_code   | fulfillments.line_items.total_discount_set.presentment_money |
| Added         |  Order      |  amount   | fulfillments.line_items.total_discount_set.shop_money |
| Added         |  Order      |  currency_code   | fulfillments.line_items.total_discount_set.shop_money |
| Added         |  Order      |  address1   | fulfillments.origin_address |
| Added         |  Order      |  address2   | fulfillments.origin_address |
| Added         |  Order      |  city   | fulfillments.origin_address |
| Added         |  Order      |  country_code   | fulfillments.origin_address |
| Added         |  Order      |  province_code   | fulfillments.origin_address |
| Added         |  Order      |  zip   | fulfillments.origin_address |
| Added         |  Order      |  attributed_staffs   | line_items |
| Added         |  Order      |  fulfillment_status   | line_items |
| Added         |  Order      |  price_set   | line_items |
| Added         |  Order      |  current_quantity   | line_items |
| Added         |  Order      |  tip_payment_gateway   | line_items |
| Added         |  Order      |  tip_payment_method   | line_items |
| Added         |  Order      |  total_discount_set   | line_items |
| Added         |  Order      |  price_set   | line_items.tax_lines |
| Added         |  Order      |  channel_liable   | line_items.tax_lines |
| Added         |  Order      |  amount   | line_items.discount_allocations.amount_set.presentment_money |
| Added         |  Order      |  currency_code   | line_items.discount_allocations.amount_set.presentment_money |
| Added         |  Order      |  amount   | line_items.discount_allocations.amount_set.shop_money |
| Added         |  Order      |  currency_code   | line_items.discount_allocations.amount_set.shop_money |
| Added         |  Order      |  discount_application_index   | line_items.discount_allocations |
| Added         |  Order      |  id   | line_items.origin_location |
| Added         |  Order      |  country_code   | line_items.origin_location |
| Added         |  Order      |  province_code   | line_items.origin_location |
| Added         |  Order      |  name   | line_items.origin_location |
| Added         |  Order      |  address1   | line_items.origin_location |
| Added         |  Order      |  address2   | line_items.origin_location |
| Added         |  Order      |  city   | line_items.origin_location |
| Added         |  Order      |  zip   | line_items.origin_location |

## Order Parameters
|   Action      | Object      | Field      | Hierarchy |
|---------------|-------------|------------|-----------|
| Added         |  Order      |  Customer_id  | - |

## Fulfillment Order Object
|   Action      | Object      | Field      | Hierarchy |
|---------------|-------------|------------|-----------|
| Deleted         |  Fulfillment Order      |  fulfillment_service_handle   | line_items |
| Deleted         |  Fulfillment Order      |  fulfillment_service_handle   | Original_fulfillment_order |
| Deleted         |  Fulfillment Order      |  fulfillment_service_handle   | Moved_fulfillment_order |
| Deleted         |  Fulfillment Order      |  fulfillment_service_handle   | Replacement_fulfillment_order |
| Deleted         |  Fulfillment Order      |  fulfillment_service_handle   | Fulfillment_order |

|   Action      | Object      | Field      | Hierarchy |
|---------------|-------------|------------|-----------|
| Added         |  Fulfillment Order      |  Address1   | origin |
| Added         |  Fulfillment Order      |  Address2   | origin |
| Added         |  Fulfillment Order      |  city   | origin |
| Added         |  Fulfillment Order      |  country_code   | origin |
| Added         |  Fulfillment Order      |  location_id   | origin |
| Added         |  Fulfillment Order      |  name   | origin |
| Added         |  Fulfillment Order      |  phone   | origin |
| Added         |  Fulfillment Order      |  province   | origin |
| Added         |  Fulfillment Order      |  zip   | origin |
| Added         |  Fulfillment Order      |  outgoing_requests   | - |
| Added         |  Fulfillment Order      |  international_duties   | replacement_fulfillment_order |
| Added         |  Fulfillment Order      |  delivery_method   | replacement_fulfillment_order |
| Added         |  Fulfillment Order      |  international_duties   | fulfillment_order |
| Added         |  Fulfillment Order      |  delivery_method   | fulfillment_order |

## Fulfillment Order Query Parameters

|   Action      | Object      | Field      | Hierarchy |
|---------------|-------------|------------|-----------|
| Added         |  Fulfillment Order      |  include_financial_summaries   | - |
| Added         |  Fulfillment Order      |  Include_order_reference_fields   | - |

## Product Object

|   Action      | Object      | Field      | Hierarchy |
|---------------|-------------|------------|-----------|
| Deleted         |  Product      |  metafields_global_description_tag   | - |
| Deleted         |  Product      |  Metafields_global_title_tag   | - |

|   Action      | Object      | Field      | Hierarchy |
|---------------|-------------|------------|-----------|
| Added         |  Product      |  status   | - |
| Added         |  Product      |  admin_graphql_api_id   | - |
| Added         |  Product      |  inventory_item_id   | variants |
| Added         |  Product      |  presentment_prices (Array)   | variants |
| Added         |  Product      |  admin_graphql_api_id   | variants |
| Added         |  Product      |  admin_graphql_api_id   | image |
| Added         |  Product      |  alt   | image |
| Added         |  Product      |  height   | image |
| Added         |  Product      |  width   | image |
| Added         |  Product      |  admin_graphql_api_id   | images |
| Added         |  Product      |  alt   | images |
| Added         |  Product      |  height   | images |
| Added         |  Product      |  width   | images |
| Added         |  Product      |  key   | metafields |
| Added         |  Product      |  value   | metafields |
| Added         |  Product      |  type   | metafields |
| Added         |  Product      |  namespace   | metafields |

## Refund Object

|   Action      | Object      | Field      | Hierarchy |
|---------------|-------------|------------|-----------|
| Added         |  Refund      |  id   | refund_line_items |
| Added         |  Refund      |  restock_type   | refund_line_items |
| Added         |  Refund      |  cancel   | refund_line_items.restock_type |
| Added         |  Refund      |  return   | refund_line_items.restock_type |
| Added         |  Refund      |  legacy_restock   | refund_line_items.restock_type |
| Added         |  Refund      |  subtotal   | refund_line_items |
| Added         |  Refund      |  total_tax   | refund_line_items |
| Added         |  Refund      |  subtotal_set   | refund_line_items |
| Added         |  Refund      |  total_tax_set   | refund_line_items |
| Added         |  Refund      |  line_item   | refund_line_items |
| Added         |  Refund      |  admin_graphql_api_id   | refund_line_items |
| Added         |  Refund      |  duties   | refund_line_items |
| Added         |  Refund      |  discount_allocations   | refund_line_items |
| Added         |  Refund      |  amount   | refund_line_items.discount_allocations |
| Added         |  Refund      |  amount_set.presentment_money.amount   | refund_line_items.discount_allocations |
| Added         |  Refund      |  amount_set.presentment_money.currency_code   | refund_line_items.discount_allocations |
| Added         |  Refund      |  amount_set.shop_money.amount   | refund_line_items.discount_allocations |
| Added         |  Refund      |  amount_set.shop_money.currency_code   | refund_line_items.discount_allocations |
| Added         |  Refund      |  discount_application_index   | refund_line_items.discount_allocations |
| Added         |  Refund      |  restock   | - |
| Added         |  Refund      |  total_duties_set   | - |
| Added         |  Refund      |  additional_fees   | - |
| Added         |  Refund      |  total_additional_fees_set   | - |
| Added         |  Refund      |  return   | - |
| Added         |  Refund      |  refund_shipping_lines   | - |
| Added         |  Refund      |  Admin_graphql_api_id   | - |

## Transaction Object

|   Action      | Object      | Field      | Hierarchy |
|---------------|-------------|------------|-----------|
| Added         |  Transaction      |  admin_graphql_api_id   | - |
| Added         |  Transaction      |  currency_exchange_adjustment   | - |
| Added         |  Transaction      |  manual_payment_gateway   | - |
| Added         |  Transaction      |  payment_id   | - |
| Added         |  Transaction      |  processed_at   | - |
| Added         |  Transaction      |  total_unsettled_set.presentment_money   | - |
| Added         |  Transaction      |  total_unsettled_set.shop_money   | - |
| Added         |  Transaction      |  authorization_expires_at   | - |
| Added         |  Transaction      |  extended_authorization_attributes   | - |
| Added         |  Transaction      |  Payments_refund_attributes   | - |
| Added         |  Transaction      |  buyer_action_info   | payment_details |
| Added         |  Transaction      |  credit_card_expiration_month   | payment_details |
| Added         |  Transaction      |  credit_card_expiration_year   | payment_details |
| Added         |  Transaction      |  credit_card_name   | payment_details |
| Added         |  Transaction      |  credit_card_wallet   | payment_details |
| Added         |  Transaction      |  payment_method_name   | payment_details |

## Inventory Object

|   Action      | Object      | Field      | Hierarchy |
|---------------|-------------|------------|-----------|
| Added         |  Inventory      |  available   | - |
| Added         |  Inventory      |  cost   | - |
| Added         |  Inventory      |  country_code_of_origin   | - |
| Added         |  Inventory      |  country_harmonized_system_codes   | - |
| Added         |  Inventory      |  harmonized_system_code   | - |
| Added         |  Inventory      |  country_code   | - |
| Added         |  Inventory      |  province_code_of_origin   | - |
| Added         |  Inventory      |  requires_shipping   | - |
| Added         |  Inventory      |  cost   | - |

## Inventory Object Parameters

|   Action      | Object      | Field      | Hierarchy |
|---------------|-------------|------------|-----------|
| Added         |  Inventory      |  updated_at_min   | - |

## Customer Object

|   Action      | Object      | Field      | Hierarchy |
|---------------|-------------|------------|-----------|
| Deleted       |  Customer      |  accepts_marketing   | - |

|   Action      | Object      | Field      | Hierarchy |
|---------------|-------------|------------|-----------|
| Added         |  Customer      |  customer_id   | addresses |
| Added         |  Customer      |  default   | addresses |
| Added         |  Customer      |  id   | addresses |
| Added         |  Customer      |  state   | email_marketing_consent |
| Added         |  Customer      |  opt_in_level   | email_marketing_consent |
| Added         |  Customer      |  consent_updated_at   | email_marketing_consent |
| Added         |  Customer      |  key   | metafield |
| Added         |  Customer      |  namespace   | metafield |
| Added         |  Customer      |  value   | metafield |
| Added         |  Customer      |  type   | metafield |
| Added         |  Customer      |  opt_in_level   | sms_marketing_consent |
| Added         |  Customer      |  consent_updated_at   | sms_marketing_consent |
| Added         |  Customer      |  consent_collected_from   | sms_marketing_consent |
| Added         |  Customer      |  marketing_opt_in_level   | - |
| Added         |  Customer      |  password   | - |
| Added         |  Customer      |  password_confirmation   | - |
| Added         |  Customer      |  id   | - |
| Added         |  Customer      |  currency   | - |

## Fulfillment Object 

|   Action      | Object      | Field      | Hierarchy |
|---------------|-------------|------------|-----------|
| Added         |  Fulfillment      |  created_at   | - |
| Added         |  Fulfillment      |  id   | - |
| Added         |  Fulfillment      |  location_id   | - |
| Added         |  Fulfillment      |  name   | - |
| Added         |  Fulfillment      |  order_id   | - |
| Added         |  Fulfillment      |  receipt   | - |
| Added         |  Fulfillment      |  testcase   | - |
| Added         |  Fulfillment      |  authorization   | - |
| Added         |  Fulfillment      |  service   | - |
| Added         |  Fulfillment      |  shipment_status   | - |
| Added         |  Fulfillment      |  status   | - |
| Added         |  Fulfillment      |  tracking_company   | - |
| Added         |  Fulfillment      |  tracking_numbers   | - |
| Added         |  Fulfillment      |  tracking_number   | - |
| Added         |  Fulfillment      |  tracking_urls   | - |
| Added         |  Fulfillment      |  tracking_url   | - |
| Added         |  Fulfillment      |  updated_at   | - |
| Added         |  Fulfillment      |  variant_inventory_management   | - |
| Added         |  Fulfillment      |  line_items   | - |
| Added         |  Fulfillment      |  address1   | origin_address |
| Added         |  Fulfillment      |  address2   | origin_address |
| Added         |  Fulfillment      |  city   | origin_address |
| Added         |  Fulfillment      |  country_code   | origin_address |
| Added         |  Fulfillment      |  province_code   | origin_address |
| Added         |  Fulfillment      |  zip   | origin_address |

## Variant Object

|   Action      | Object      | Field      | Hierarchy |
|---------------|-------------|------------|-----------|
| Deleted       |  Variant      |  value_type   | Metafields |

|   Action      | Object      | Field      | Hierarchy |
|---------------|-------------|------------|-----------|
| Added         |  Variant      |  created_at   | - |
| Added         |  Variant      |  id   | - |
| Added         |  Variant      |  old_inventory_quantity   | - |
| Added         |  Variant      |  updated_at   | - |
| Added         |  Variant      |  inventory_quantity   | - |
| Added         |  Variant      |  type   | metafields |
| Added         |  Variant      |  option1   | option |
| Added         |  Variant      |  amount   | presentment_prices |
| Added         |  Variant      |  currency_code   | presentment_prices |
| Added         |  Variant      |  compare_at_price   | presentment_prices |

## Variant Object Parameters

|   Action      | Object      | Field      | Hierarchy |
|---------------|-------------|------------|-----------|
| Added       |  Variant      |  presentment_currencies   | - |

## Custom_Collection Object

|   Action      | Object      | Field      | Hierarchy |
|---------------|-------------|------------|-----------|
| Deleted       |  Custom_Collection      |  value_type   | Metafields |

|   Action      | Object      | Field      | Hierarchy |
|---------------|-------------|------------|-----------|
| Added         |  Custom_Collection      |  id   | - |
| Added         |  Custom_Collection      |  width   | image |
| Added         |  Custom_Collection      |  height   | image |
| Added         |  Custom_Collection      |  created_at   | image |
| Added         |  Custom_Collection      |  type   | Metafields |

## Custom Collection Parameters

|   Action      | Object      | Field      | Hierarchy |
|---------------|-------------|------------|-----------|
| Added         |  Custom_Collection      |  handle   | - |
| Added         |  Custom_Collection      |  title   | - |