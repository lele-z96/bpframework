

/**
 * @desc 表明指定的属性可以自动装载指定的值.
 * @example
 *   ﹫Service()
 *   class Demo {
 *     ﹫Value("Miss A")
 *     teacher1Name: string; // will set to 'Miss A'
 * 
 *     ﹫Value("${teacherName2}")
 *     teacher2Name: string; // will set to config value "teacherName2"
 * 
 *     ﹫Value("${teacherName3:defaultName}")
 *     teacher3Name: string; // will set to 'defaultName' if config value "teacherName3" isn't existed.
 *   }
 * 
 * @returns {PropertyDecorator}
 */

export function Value(value: any): PropertyDecorator;