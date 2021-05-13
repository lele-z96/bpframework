'use strict';

/**
* Copyright (c) 2020 Copyright bp All Rights Reserved.
*/

import { Service, FeignClientConfigure } from "bpframework";
import { FeignClientConfigureInfo, FeignClientFilterResponseData } from "bpframework/types";

@Service()
class Configure {
  @FeignClientConfigure
  onConfigure(): FeignClientConfigureInfo {
    return {
      /** @desc Headers that is appended by default every time a request is sent to another microservice. */
      defaultHeaders: {
        'content-type': 'application/json;charset=utf-8',
        'X-Costom-Header': 'xxx',
      },
      /** @desc Processing the data of the response. */
      filterResponseCallback: (data: FeignClientFilterResponseData) => {
        if (data.requestServiceName == 'demo-microservice-name') {
          data.returnMessage = JSON.parse(data.receiveMessage);
        } else {
          data.returnMessage = data.receiveMessage;
        } // if..else.
      }
    } // 
  }
}
