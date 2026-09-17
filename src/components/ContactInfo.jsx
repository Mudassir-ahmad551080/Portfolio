import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { useTheme } from '../context/ThemeContext';

const ContactInfo = () => {
  const [theme] = useTheme();

  const contactData = [
    {
      id: 1,
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone",
      text: "+92 310 4847156",
      link: "tel:+923104847156",
      accent: "#3b82f6",
    },
    {
      id: 2,
      icon: <FaWhatsapp className="w-6 h-6" />,
      title: "WhatsApp",
      text: "+92 321 5837843",
      link: "https://wa.me/923215837843",
      accent: "#22c55e",
    },
    {
      id: 3,
      icon: <MdOutlineMail className="w-6 h-6" />,
      title: "Email",
      text: "ma6386731@gmail.com",
      link: "mailto:ma6386731@gmail.com",
      accent: "#ef4444",
    }
  ];

  return (
    <div id={theme} className="w-full max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactData.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target={item.title === 'WhatsApp' ? '_blank' : '_self'}
            rel="noreferrer"
            className="group flex flex-col items-center justify-center p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            style={{
              border: '1px solid var(--border-default)',
              backgroundColor: 'var(--overlay-light)',
              backdropFilter: 'blur(12px)',
              boxShadow: 'var(--shadow-sm)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = item.accent;
              e.currentTarget.style.boxShadow = `0 12px 30px -12px ${item.accent}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-default)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}
          >
            {/* Icon container */}
            <div
              className="p-4 rounded-full mb-4 transition-transform duration-300 group-hover:scale-110"
              style={{
                backgroundColor: 'var(--surface-2)',
                color: item.accent,
              }}
            >
              {item.icon}
            </div>

            <h3
              className="text-lg font-bold mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              {item.title}
            </h3>

            <p
              className="text-sm md:text-base font-medium"
              style={{ color: 'var(--text-secondary)' }}
            >
              {item.text}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ContactInfo;
