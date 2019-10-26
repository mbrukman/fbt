/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @generated SignedSource<<59bff96be8cea6e43ca454b5e362038e>>
 *
 * Generated by LanguageCLDRGenScript
 *
 * @flow
 */
const IntlVariations = require('IntlVariations');
const IntlCLDRNumberType43 = {
  getVariation(n: number): number {
    if (n === 1) {
      return IntlVariations.NUMBER_ONE;
    } else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14)) {
      return IntlVariations.NUMBER_FEW;
    } else {
      return IntlVariations.NUMBER_MANY;
    }
  }
};

module.exports = IntlCLDRNumberType43;