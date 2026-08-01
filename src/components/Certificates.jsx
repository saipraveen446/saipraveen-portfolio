import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt } from 'react-icons/fa';

const MotionDiv = motion.div;

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certificates = [
    {
      id: 1,
      title: 'Technical Support Fundamentals',
      credentialId: '2XPU26P2DMSQ',
      image: '/assets/certificates/technical_support.jpg',
      verifyLink: 'https://www.coursera.org/account/accomplishments/certificate/2XPU26P2DMSQ',
    },
    {
      id: 2,
      title: 'Python for Everybody Specialization',
      credentialId: 'UPKVP9KH7XSZ',
      image: '/assets/certificates/python_everybody.jpg',
      verifyLink: 'https://www.coursera.org/account/accomplishments/specialization/certificate/UPKVP9KH7XSZ',
    },
    {
      id: 3,
      title: 'Bits and Bytes Networking',
      credentialId: 'G5XT5UMWPJCL',
      image: '/assets/certificates/bits_bytes.jpg',
      verifyLink: 'https://www.coursera.org/account/accomplishments/certificate/G5XT5UMWPJCL',
    },
    {
      id: 4,
      title: 'AWS Cloud Foundations',
      credentialId: 'AWS-Cloud-Foundations',
      image: '/assets/certificates/aws_academy.jpeg',
      verifyLink: 'https://www.credly.com/badges/ae2a62e9-6272-4bbd-896e-ab917f59a5bf',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, when: 'beforeChildren' },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div id="certificates" ref={ref} className="mx-auto w-full max-w-7xl px-0 sm:px-0">
      <MotionDiv
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {certificates.map((certificate) => (
          <MotionDiv
            key={certificate.id}
            variants={itemVariants}
            whileHover={{ y: -4, boxShadow: '0 12px 40px -12px rgba(0, 0, 0, 0.35)' }}
            className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-800"
          >
            <div className="flex h-48 items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-700">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="h-full w-full object-contain p-4"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">{certificate.title}</h3>
              <div className="mt-auto border-t border-gray-100 pt-4 dark:border-gray-700">
                <a
                  href={certificate.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Verify Certificate
                </a>
              </div>
            </div>
          </MotionDiv>
        ))}
      </MotionDiv>
    </div>
  );
};

export default Certificates;
