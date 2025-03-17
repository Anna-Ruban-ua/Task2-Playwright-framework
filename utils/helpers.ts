export function generateInvalidUsername(): string {
    return `invalid_${Math.random().toString(36).substring(7)}`;
  }
  
  export function generateInvalidPassword(): string {
    return `InvalidPass${Math.random().toString(36).substring(10)}`;
  }