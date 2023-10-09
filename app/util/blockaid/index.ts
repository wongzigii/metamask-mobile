import {
  Reason,
  ResultType,
  SecurityAlertResponse,
} from '../../components/UI/BlockaidBanner/BlockaidBanner.types';

// eslint-disable-next-line import/prefer-default-export
export const isBlockaidFeatureEnabled = () =>
  process.env.MM_BLOCKAID_UI_ENABLED === 'true';

export const PPOM_CALL_METRIC_KEY_MAP: Record<string, string> = {
  eth_call: 'ppom_eth_call_count',
  eth_createAccessList: 'ppom_eth_createAccessList_count',
  eth_getStorageAt: 'ppom_eth_getStorageAt_count',
  eth_getCode: 'ppom_eth_getCode_count',
  eth_getTrasanctionCount: 'ppom_eth_getTrasanctionCount_count',
  eth_getBalance: 'ppom_eth_getBalance_count',
  trace_call: 'ppom_trace_call_count',
};

export const getBlockaidMetricsParams = (
  securityAlertResponse: SecurityAlertResponse,
) => {
  const additionalParams: Record<string, any> = {};

  if (securityAlertResponse && isBlockaidFeatureEnabled()) {
    const { resultType, reason, providerRequestsCount } = securityAlertResponse;
    let uiCustomizations;

    if (resultType === ResultType.Malicious) {
      uiCustomizations = ['flagged_as_malicious'];
    }

    additionalParams.ui_customizations = uiCustomizations;

    if (resultType !== ResultType.Benign) {
      additionalParams.security_alert_reason = Reason.notApplicable;

      if (reason) {
        additionalParams.security_alert_response = resultType;
        additionalParams.security_alert_reason = reason;
      }
    }

    // add counts of each RPC call
    if (providerRequestsCount) {
      Object.keys(providerRequestsCount).forEach((key: string) => {
        const metricKey = PPOM_CALL_METRIC_KEY_MAP[key];
        additionalParams[metricKey] = providerRequestsCount[key];
      });
    }
  }

  return additionalParams;
};
