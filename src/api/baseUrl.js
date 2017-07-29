export default function getBaseUrl() {
    const inDevelopmentEnv = window.location.hostname === 'localhost';
    return inDevelopmentEnv ? 'http://localhost:3001/' : '/';
}
