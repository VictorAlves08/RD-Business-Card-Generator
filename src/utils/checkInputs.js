/**
 * Valida o nome.
 * O nome é válido se tiver pelo menos dois caracteres.
 *
 * @param {string} name - O nome a ser validado.
 * @returns {boolean} - Retorna true se válido, false caso contrário.
 */
export const validateName = (name) => {
    return typeof name === 'string' && name.trim().length >= 2;
};

/**
 * Valida o email.
 * O email é válido se corresponder a um endereço de email válido.
 *
 * @param {string} email - O email a ser validado.
 * @returns {boolean} - Retorna true se válido, false caso contrário.
 */
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Valida o telefone.
 * O telefone é válido se corresponder ao formato (00) 0 0000-0000.
 *
 * @param {string} phone - O telefone a ser validado.
 * @returns {boolean} - Retorna true se válido, false caso contrário.
 */
export const validatePhone = (phone) => {
    // Expressão regular para o formato (00) 0 0000-0000
    const phoneRegex = /^\(\d{2}\)\s\d\s\d{4}-\d{4}$/;
    return phoneRegex.test(phone);
};

/**
 * Formata o telefone para o padrão (99) 9999[9]-9999.
 *
 * @param {string} value - O valor do telefone a ser formatado.
 * @returns {string} - Telefone formatado.
 */
export const formatPhone = (value) => {
    if (!value) return value;

    const phoneNumber = value.replace(/\D/g, '');
    const trimmedPhone = phoneNumber.substring(0, 11);
    const phoneRegex = /^(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})$/;
    const match = trimmedPhone.match(phoneRegex);

    if (!match) return value;

    let formatted = '';

    if (match[1]) {
        formatted += `(${match[1]}`;
    }

    if (match[2]) {
        formatted += `) ${match[2]}`;
    }

    if (match[3]) {
        formatted += ` ${match[3]}`;
    }

    if (match[4]) {
        formatted += `-${match[4]}`;
    }

    return formatted;
};
