// import './styles/index.scss';

// app.mount('#app');
const modules = import.meta.glob('./libs/**/*.ts');
for (const path in modules) {
  modules[path]().then((mod) => {
    (mod as { register: () => void }).register();
  });
}
