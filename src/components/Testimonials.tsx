

const testimonials = [
  {
    body: "Apex Enterprises has been instrumental in helping us build our pan-India team. Their understanding of regional labour laws and commitment to compliance is unmatched across all our locations.",
    author: "Priya Sharma",
    title: "HR Director, Tech Mahindra"
  },
  {
    body: "The level of expertise in PF/ESI compliance and attention to detail in candidate screening has made Apex our go-to staffing partner for operations across Mumbai, Delhi, and Bengaluru.",
    author: "Rajesh Patel",
    title: "Operations Director, Aditya Birla Group"
  },
  {
    body: "Working with Apex has transformed our hiring process across Tier-2 cities where finding quality talent is challenging. Their understanding of local markets from Pune to Chandigarh has been invaluable.",
    author: "Anjali Desai",
    title: "CEO, Apollo Healthcare Solutions"
  },
  {
    body: "The regulatory compliance expertise that Apex provides has helped us navigate the complex labour laws in different Indian states. Their team consistently stays updated with changing regulations.",
    author: "Vikram Singh",
    title: "Legal Head, Reliance Retail"
  }
];

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">Client Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by India's Leading Businesses
          </p>
          <p className="mt-4 text-lg text-gray-600">
            See what our clients across India have to say about our commitment to excellence
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, testimonialIdx) => (
              <div key={testimonialIdx} className="flex flex-col justify-between bg-white p-8 shadow-lg ring-1 ring-gray-900/5 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
                <blockquote className="text-lg leading-6 text-gray-900">
                  "{testimonial.body}"
                </blockquote>
                <div className="mt-6 flex items-center gap-x-4">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm leading-6 text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}