/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import * as FlipperPluginModule from '../index';

test('Correct top level API exposed', () => {
  const exposedAPIs: string[] = [];
  const exposedTypes: string[] = [];
  Object.entries(FlipperPluginModule).forEach(([key, value]) => {
    if (key[0] === '_') {
      return;
    }
    if (value === undefined) {
      exposedTypes.push(key);
    } else {
      exposedAPIs.push(key);
    }
  });

  // Note, all `exposedAPIs` should be documented in `flipper-plugin.mdx`
  expect(exposedAPIs.sort()).toMatchInlineSnapshot(`
    Array [
      "Layout",
      "NUX",
      "TestUtils",
      "Tracked",
      "TrackingScope",
      "batch",
      "createState",
      "produce",
      "renderReactRoot",
      "sleep",
      "styled",
      "theme",
      "usePlugin",
      "useTrackedCallback",
      "useValue",
      "withTrackingScope",
    ]
  `);

  expect(exposedTypes.sort()).toMatchInlineSnapshot(`
    Array [
      "Atom",
      "DefaultKeyboardAction",
      "Device",
      "DeviceLogEntry",
      "DeviceLogListener",
      "DevicePluginClient",
      "DeviceType",
      "Draft",
      "FlipperLib",
      "LogLevel",
      "MenuEntry",
      "NormalizedMenuEntry",
      "PluginClient",
    ]
  `);
});
