import { Star } from 'lucide-react';

const testimonials = [
  {
    body: "Apex Enterprises has been instrumental in helping us build our pan-India team. Their understanding of regional labour laws and commitment to compliance is unmatched across all our locations.",
    author: "Priya Sharma",
    title: "HR Director, Tech Mahindra",
    image: "/testimonials/priya-sharma.jpg"
  },
  {
    body: "The level of expertise in PF/ESI compliance and attention to detail in candidate screening has made Apex our go-to staffing partner for operations across Mumbai, Delhi, and Bengaluru.",
    author: "Rajesh Patel",
    title: "Operations Director, Aditya Birla Group",
    image: "/testimonials/rajesh-patel.jpg"
  },
  {
    body: "Working with Apex has transformed our hiring process across Tier-2 cities where finding quality talent is challenging. Their understanding of local markets from Pune to Chandigarh has been invaluable.",
    author: "Anjali Desai",
    title: "CEO, Apollo Healthcare Solutions",
    image: "/testimonials/anjali-desai.jpg"
  },
  {
    body: "The regulatory compliance expertise that Apex provides has helped us navigate the complex labour laws in different Indian states. Their team consistently stays updated with changing regulations.",
    author: "Vikram Singh",
    title: "Legal Head, Reliance Industries",
    image: "/testimonials/vikram-singh.jpg"
  }
];

export default function Testimonials() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">What Our Clients Say</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A Partnership You Can Trust
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-white p-8 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="flex text-yellow-400 gap-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                  </div>
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.image} alt="" />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-gray-600">{testimonial.title}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}