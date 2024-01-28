/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
package io.onetable.client;

import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NonNull;

@EqualsAndHashCode(callSuper = true)
public class SourceTable extends ExternalTable {
  @NonNull String dataPath;

  @Builder(toBuilder = true)
  public SourceTable(
      String name,
      String formatName,
      String metadataPath,
      String dataPath,
      String[] namespace,
      CatalogConfig catalogConfig) {
    super(name, formatName, metadataPath, namespace, catalogConfig);
    this.dataPath = dataPath == null ? this.metadataPath : sanitizeBasePath(dataPath);
  }
}