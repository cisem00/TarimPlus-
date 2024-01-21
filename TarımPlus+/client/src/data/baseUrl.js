export function getProxy() {
    console.log('base url hesaplaniyor');
    switch (process.env.NODE_ENV) {
      case 'development':
        return 'http://localhost:4001';
  
      case 'production':
        return '';
      default:
        return 'http://localhost:4001';
    }
  }
  
  const baseUrl = Object.freeze(getProxy());
  
  export default baseUrl;
  