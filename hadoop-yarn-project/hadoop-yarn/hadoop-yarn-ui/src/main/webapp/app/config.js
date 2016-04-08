/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Host and port configurations
 */

export default {
    envDefaults: {

    /*
     * Local URL. This can be empty by default. For testbed if corsproxy is used,
     * corsproxy URL can be configured here. For eg:"localhost:1337/"
     */
      localBaseUrl: "localhost:1337/",

    /*
     * Timeline web interface can be configured below.
     */
      timelineWebUrl: "localhost:8188",

    /*
     * RM web interface can be configured below.
     */
      rmWebUrl: "localhost:8088",

    /*
     * Protocol scheme. It can be "http://" or "https://". By default, http is used.
     */
      protocolScheme: "http://"
   },

    restNamespace: {
      timeline: 'ws/v1/applicationhistory',
      cluster: 'ws/v1/cluster',
      metrics: 'ws/v1/cluster/metrics',
      node: 'ws/v1/node'
   }
};
