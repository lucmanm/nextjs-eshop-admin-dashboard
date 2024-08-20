import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { CloudImage } from '../_components/cld-image';
const images = [
  'eshop/products/n2wyuaadsveh5av75vxw',
  'eshop/products/qxfadxyaggtuckfvhi9z',
  'eshop/products/pkzmi9kyr81eqgolw9pp',
  'eshop/products/dzsvpukzyqernxge58yl',
  'eshop/products/zvthgqlvlfjzy0bqvtgx',
];

const Page = () => {
  return (
    <TabGroup className="w-full p-1 md:w-96" defaultIndex={1}>
      <TabPanels className="">
        {images.map((image) => (
          <TabPanel key={image}>
            <CloudImage public_id={image} className="w-full overflow-hidden rounded-md p-4" />
          </TabPanel>
        ))}
      </TabPanels>
      <TabList className="flex justify-center gap-2 py-1">
        {images.map((image) => (
          <Tab key={image} className="size-20">
            <CloudImage
              public_id={image}
              className=" overflow-hidden rounded-md object-cover p-1.5"
            />
          </Tab>
        ))}
      </TabList>
    </TabGroup>
  );
};

export default Page;
