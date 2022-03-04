const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

/**
 * Валидирует email
 *
 * @param {string | undefined} email - почта
 * @returns {boolean}
 */
export const validateEmail = (email?: string) =>
  !email ? false : emailRegexp.test(email);
