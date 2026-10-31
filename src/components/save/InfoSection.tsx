import { Users, TrendingUp, HeartHandshake } from 'lucide-react';

export function InfoSection() {
  return (
    <section id="about" className="section-container py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Who is Helped */}
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-orange-500 mb-3 text-lg">Who is Helped by You?</h2>
            <p className="text-sm text-gray-700">
              Your help reaches the victims of female infanticide & abandoned children of our Mazhalai Illam.
            </p>
          </div>

          {/* What Difference */}
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-gray-900 mb-3 text-lg">What difference has it made?</h2>
            <p className="text-sm text-gray-700">
              In the 80 year history, more than <span className="text-orange-500">1000 children</span> have been saved and more than <span className="text-orange-500">1000 happy families</span> have been built.
            </p>
          </div>

          {/* How to Help */}
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <HeartHandshake className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-orange-500 mb-3 text-lg">How you can help?</h2>
            <ul className="text-left text-sm text-gray-700 space-y-2">
              <li className="flex gap-2">
                <span className="text-orange-500 shrink-0">1.</span>
                <span><span className="text-orange-500">Adopt a child</span> – Adoption is a beautiful way to build a family.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-500 shrink-0">2.</span>
                <span><span className="text-orange-500">'Little Drop'</span> – Donate Rs.100/- per month for 1 year. It will help provide milk tins, diapers, vaccines and health care.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-500 shrink-0">3.</span>
                <span><span className="text-orange-500">Offer your services</span>, as a volunteer. Help us find 5 kind-hearted people like you.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
