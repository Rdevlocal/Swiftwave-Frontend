import { Container, Wrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const products = new Array(50).fill(null).map((_, index) => ({
  name: `Product ${index + 1}`,
  description: `This is a brief description of product ${index + 1}. It's a great solution for your business needs.`,
  imageUrl: "/images/product-placeholder.png", // Placeholder image
  link: `/products/product-${index + 1}`,
}));

const ProductsPage = () => {
  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
      {/* Hero Section */}
      <Wrapper>
        <Container>
          <div className="flex flex-col items-center justify-center py-20 h-full">
            <h1 className="text-4xl md:text-6xl font-semibold text-center text-transparent bg-gradient-to-b from-gray-50 to-gray-50 bg-clip-text">
              Unlock Powerful Products for Your Business
            </h1>
            <p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
              Explore the advanced products of Swiftwave designed to take your enterprise to the next level.
            </p>
          </div>
        </Container>
      </Wrapper>

      {/* Products Section */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              Advanced Products for Enterprise Efficiency
            </h2>
            <p className="text-muted-foreground mt-6">
              Explore the cutting-edge products designed to improve enterprise productivity.
            </p>
          </div>
        </Container>

        <Container>
          <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
            {/* Product Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-background rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="relative z-10 flex items-center justify-center mb-6">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-28 h-28 object-cover rounded-full border-4 border-foreground/30 transition-all duration-300 transform hover:scale-110"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground text-center z-10">{product.name}</h3>
                  <p className="text-muted-foreground mt-2 text-center z-10">{product.description}</p>
                  <Link
                    href={product.link}
                    className="mt-4 text-foreground/80 hover:text-foreground text-sm font-medium z-10"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
};

export default ProductsPage;
