/**
 * To make ts-node happy without --files args
 * Note: this <reference ... /> must be put before all code, or it will be ignored.
 */
/// <reference path="./typings/matrix-appservice-bridge.d.ts" />

import path from 'path'

import { codeRoot } from '../commonjs/code-root.cjs'

/**
 * Export
 */

export { log } from 'wechaty'

export { VERSION } from './version.js'

export const AGE_LIMIT_SECONDS = 5 * 60   // 5 minutes
export const DEFAULT_PORT      = 8788     // W:87 X:88

export const REGISTRATION_FILE = 'wechaty-registration.yaml'
export const SCHEMA_FILE       = path.join(codeRoot, 'config/schema.yaml')
