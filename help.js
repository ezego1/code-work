
const creditCardProcessor = (tokenize, createAsset) => ({
  processCreditCard: async ({ creditCard, consentGiven, additionalData, fingerPrintElem, challengeElem, redirectElem, openRedirectWindow, closeRedirectWindow, challengeWindowSize, toggleAssetCreationFormVisibility,handleTokenizationErrors,
    token, // If we tokenize via third party service
    tokenizationType, // Currently used only in PAYMENT_OS
    encryptedCvv // For PayU India
  }) => {
const cseToken = token || (await tokenize({ creditCard, consentGiven, handleTokenizationErrors }));

    if (cseToken === undefined) {
        closeRedirectWindow();
      return;
    }

    const result = await createAsset({
      cseToken,
      consentGiven,
      additionalData,
      fingerPrintElem,
      challengeElem,
      redirectElem,
      openRedirectWindow,
      closeRedirectWindow,
      challengeWindowSize,
      toggleAssetCreationFormVisibility,
      tokenizationType,
      encryptedCvv
    });

    // eslint-disable-next-line consistent-return
    return result;
  },
});

export default creditCardProcessor;