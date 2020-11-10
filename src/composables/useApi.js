import { ref, onMounted } from '@vue/composition-api';

export default function useApi() {
  const products = ref([]);
  const filters = ref([]);
  const title = ref('default title');
  const description = ref('default description');

  const fetchData = async () => {
    const res = await fetch(
      'https://gist.githubusercontent.com/benfranke/c33280a8df5f4f9db2e63ad45cab26a4/raw/da9c754783dfbdfa9c8b05d658f277114be58c1c/products.json'
    );
    const json = await res.json();

    products.value = json.products;
    filters.value = json.filters;
    title.value = json.header.headerTitle;
    description.value = json.header.headerDescription;
  };

  onMounted(fetchData);

  return { products, filters, title, description };
}
