/**
 * Preferences class
 */
export class SharedPreferences {
    /**
     * Gets the value of a preference with given key
     * @param key Key to find value of
     */
    get(key): String;
    getString(key, defaultValue): String;
    setString(key, defaultValue): String;
}