import { Title } from "../../components/common/CustomComponents";
import { Layout } from "../../router";

export const About = () => {
  return (
    <Layout>
      <section className="mt-16 relative">
        <div className="flex justify-center mb-10">
          <Title level={2}>About Us</Title>
        </div>

        <div className="container flex justify-between">
          <div className="w-full">
            <div className="relative overflow-x-auto sm:rounded-lg bg-gray-100 p-5">
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Our History
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Cupcake ipsum dolor sit amet toffee. Topping pudding I love
                icing biscuit chocolate bar. Marshmallow donut wafer sweet roll
                lollipop. Candy I love cheesecake sweet roll jelly-o donut
                marshmallow. Wafer ice cream bonbon cake dragée cake halvah.
                Pudding I love I love sweet candy canes apple pie I love
                croissant. Jelly-o toffee gummies danish carrot cake dessert
                cheesecake cake. Chupa chups pie chupa chups danish sesame snaps
                halvah sweet. Powder I love cake oat cake gingerbread marzipan
                wafer. Gingerbread bear claw pastry cake tart tart chocolate
                bar. Marshmallow gingerbread dessert croissant I love jujubes
                cheesecake. Gummi bears liquorice powder dragée halvah
                shortbread topping tootsie roll lollipop. Caramels wafer
                tiramisu chocolate bar gummies pudding. Pastry bonbon powder
                caramels gingerbread topping liquorice. Marshmallow ice cream
                tiramisu powder sugar plum tiramisu. Macaroon chupa chups candy
                jelly-o soufflé lemon drops.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
