import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface ServiceSectionProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  imageUrl: string;
  reverse?: boolean;
}

export function ServiceSection({
  title,
  subtitle,
  description,
  benefits,
  imageUrl,
  reverse = false,
}: ServiceSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-32 last:mb-0"
    >
      <div
        className={`flex flex-col ${
          reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } gap-12 items-center`}
      >
        {/* Image */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="w-full lg:w-1/2"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </motion.div>

        {/* Content */}
        <div className="w-full lg:w-1/2">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-amber-50/30">
            <CardContent className="p-8 lg:p-10">
              <div className="mb-6">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '4rem' }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mb-4"
                />
                <h3 className="text-3xl lg:text-4xl text-emerald-900 mb-2">
                  {title}
                </h3>
                {subtitle && <p className="text-amber-600 text-lg">{subtitle}</p>}
              </div>

              {description && (
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {description}
                </p>
              )}

              {benefits.length > 0 && (
                <div>
                  <h4 className="text-xl text-emerald-800 mb-4">
                    Benefits
                  </h4>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-base leading-relaxed">
                          {benefit}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
