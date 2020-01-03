declare interface URLData extends object {
    url: string
    workingDirectory?: string
    showCommand?: number
    iconIndex?: number
    iconFile?: number
    modified?: number
    hotKey?: number
}

/**
 * Create and read Windows Internet Shortcut files.
 * @param filename The name of the shortcut file.
 * @param options The options to use in the file.
 * @example
 * ```
 * const urlFile = require("url-filea");
 *
 * (async () => {
 *     await urlFile("google.url", { url: "https://google.com" })
 *
 *     await urlFile("google.url")
 *     //=> { url: "https://google.com" }
 * })()
 * ```
*/
declare function urlFilea(filename: string): Promise<URLData>;
declare function urlFilea(filename: string, options: URLData): Promise<void>;

export = urlFilea;
