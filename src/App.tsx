import React, { useState } from 'react';
import { MapPin, Clock, Phone, Star, Menu, X, ChevronDown } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-red-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://scontent.fktm7-1.fna.fbcdn.net/v/t1.15752-9/545813076_1799170757384368_3722058886634288936_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=l_R85GiUNnEQ7kNvwHDW37i&_nc_oc=Adl8kBGr6vWbDuGn3-zbunvTI4Jno5-2larOsfwz4x7Ptrqhrlz12pePG_tHVxsSOPM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&oh=03_Q7cD3QH0caOuMRNtLfOMFr_WP_7x3JET1C2WYtHVDkmqa-zdLA&oe=68EB13F9" 
                  alt="Warrior Spirit Taekwondo Club Logo" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-white font-bold text-xl">
                  Warrior Spirit TKD
                </span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</button>
                <button onClick={() => scrollToSection('location')} className="text-gray-300 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Location</button>
                <button onClick={() => scrollToSection('schedule')} className="text-gray-300 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Schedule</button>
                <button onClick={() => scrollToSection('fees')} className="text-gray-300 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Fees</button>
                <button onClick={() => scrollToSection('gallery')} className="text-gray-300 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Gallery</button>
                <button onClick={() => scrollToSection('coach')} className="text-gray-300 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Coach</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95">
              <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors">Home</button>
              <button onClick={() => scrollToSection('location')} className="text-gray-300 hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors">Location</button>
              <button onClick={() => scrollToSection('schedule')} className="text-gray-300 hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors">Schedule</button>
              <button onClick={() => scrollToSection('fees')} className="text-gray-300 hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors">Fees</button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-300 hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors">Gallery</button>
              <button onClick={() => scrollToSection('coach')} className="text-gray-300 hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors">Coach</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-gray-900 to-red-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-green-500 rotate-45"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-white rotate-12"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-green-400 -rotate-12"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="https://scontent.fktm7-1.fna.fbcdn.net/v/t1.15752-9/545813076_1799170757384368_3722058886634288936_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=l_R85GiUNnEQ7kNvwHDW37i&_nc_oc=Adl8kBGr6vWbDuGn3-zbunvTI4Jno5-2larOsfwz4x7Ptrqhrlz12pePG_tHVxsSOPM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&oh=03_Q7cD3QH0caOuMRNtLfOMFr_WP_7x3JET1C2WYtHVDkmqa-zdLA&oe=68EB13F9" 
              alt="Warrior Spirit Taekwondo Club Logo" 
              className="w-40 h-40 mx-auto object-contain shadow-2xl border-4 border-white/20 rounded-lg bg-white/10 p-2"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-400 to-red-600 bg-clip-text text-transparent">
              Warrior Spirit
            </span>
            <br />
            <span className="text-white">Taekwondo Club</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Master the art of Taekwondo with discipline, strength, and honor
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-red-600 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:from-green-700 hover:to-red-700"
            >
              Join Classes
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-green-400" size={32} />
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Train with <span className="bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent">Purpose</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive Taekwondo programs are designed for all skill levels, from beginners to advanced practitioners
            </p>
            
            {/* Student Photos */}
            <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://scontent.fktm7-1.fna.fbcdn.net/v/t1.15752-9/545776278_1333434621714777_1524229387051483626_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=kGFszMlHtFQQ7kNvwHQSX_f&_nc_oc=AdmWqJtQnQi8GsKCtniODsOziA1yk8lzuC4kJxV2Mj0o9xj4Ct4-0MfSVyUIXhVkDvc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&oh=03_Q7cD3QE7Q4v5bJfBcFjrPOrCWWfaAEohOFQb7mA9pDokbh-4Nw&oe=68EB2BB8" 
                  alt="Warrior Spirit Taekwondo Students Training" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Our Dedicated Students</h3>
                  <p className="text-sm text-gray-200">Training with passion and discipline</p>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://scontent.fktm7-1.fna.fbcdn.net/v/t1.15752-9/546700167_769476035831420_8655265697408261672_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=QYgBqRNE5UcQ7kNvwFJQRJn&_nc_oc=Adl8ZU7beWxLXUY2jsMUdAVbN4HEUL3l6nEzdWR9Bilz6UgPtfNacNCA4G57mzIVO-s&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&oh=03_Q7cD3QFfEC0mojtdriysn7r5Odf-gJV7-pelMnwGc9ofmdQliw&oe=68EB12BC" 
                  alt="Warrior Spirit Taekwondo Club Community" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Strong Community</h3>
                  <p className="text-sm text-gray-200">Building friendships through martial arts</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-red-600 rounded-full flex items-center justify-center mb-6">
                <Star className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Beginner Classes</h3>
              <p className="text-gray-600">Perfect for those new to Taekwondo. Learn basic techniques, forms, and philosophy.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-red-600 rounded-full flex items-center justify-center mb-6">
                <Star className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Training</h3>
              <p className="text-gray-600">Intensive training for experienced practitioners focusing on competition preparation.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-red-600 rounded-full flex items-center justify-center mb-6">
                <Star className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kids Classes</h3>
              <p className="text-gray-600">Fun and engaging classes designed specifically for young martial artists.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our <span className="bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent">Club</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
                  <p className="text-gray-600 text-lg">THE ECA HEAVEN</p>
                  <p className="text-gray-600">P9X4+GJW, Budhanilkantha</p>
                  <p className="text-gray-600">Kathmandu 44600</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Easy to Find</h4>
                <p className="text-gray-600">
                  Located in the heart of Budhanilkantha, our club is easily accessible by public transport and has ample parking space for your convenience.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-red-600 p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Start Your Journey?</h3>
              <p className="mb-6 text-red-100">
                Come visit us and experience our welcoming club environment. First class is always free for new students!
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule a Visit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Training <span className="bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent">Schedule</span>
            </h2>
            <p className="text-lg text-gray-600">Find the perfect time that fits your schedule</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-green-600 to-red-600 p-8 rounded-xl shadow-xl">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Clock className="text-white" size={24} />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-white">Sunday - Thursday</span>
                    <span className="text-red-100">5:00 AM - 8:00 PM</span>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-white">Friday</span>
                    <span className="text-red-100">5:00 AM - 8:00 PM</span>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-white">Saturday</span>
                    <span className="text-red-100 font-semibold">CLOSED</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-red-100 mb-4">Multiple class times available throughout the day</p>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Full Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent">Gallery</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Witness the dedication, skill, and warrior spirit of our students in action
            </p>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src="https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/536280030_742069328584179_6719963686898336481_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHb3EcR2YEEY3s4W2OanjAXsE67N1crg-iwTrs3VyuD6ADBI5iPMX4lcYvdiLQ4OCX3Cnk_BQquFD7hFtUA-et_&_nc_ohc=FIksPFxGHDcQ7kNvwHzu07f&_nc_oc=Admrr8AXPYw39pIXlQdhAJTNY7PlV_5H_VGpp3ras1bK0F3mgyD3wWIlPNVSykyGFoQ&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&_nc_gid=YYZeM7eXE99TxcUgvwHejQ&oh=00_AfY0_UlguMJXKWoXIbCL4RlQtNCt-9N6DSJP4QQKBpgDPw&oe=68CADA8F" 
                alt="Warrior Spirit Taekwondo Training Session" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-semibold">Training Excellence</h3>
                <p className="text-sm text-gray-200">Students mastering techniques</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src="https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/504538182_682463807878065_4535806858416573174_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFudGAR92PTPr06ALWQn39xpk-dPoRmyyumT50-hGbLK2Iml2stwHf9mJgYPWf-N8REg2R0xJ7HovKN71c68b1s&_nc_ohc=tptJGUBk6b4Q7kNvwHH8D9U&_nc_oc=AdnUfzJ3flYfuandni6mr08siSF7ILkzeorQyuXxVekXtMG98hsrj6s8-ZEEz_tZQXA&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&_nc_gid=Wjiy2J5zU_KQA8wruyaPIA&oh=00_AfZ4C-EW2XZaqU-GDJPCF7ZkbyRWm22C0EYyEcc3E9uz9A&oe=68CAF045" 
                alt="Warrior Spirit Taekwondo Competition" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-semibold">Hiking Ready</h3>
                <p className="text-sm text-gray-200">Athletes in hiking</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <img 
                src="https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/496071391_662861863171593_5478058344049546526_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH8wydmUX-VTKbCqTpEaCLUso6_HK7NvGeyjr8crs28Z1Fk676F8R5rv-Qw0UL8rDKGwMop2DZ_WGz7vx2_Rrao&_nc_ohc=qQtl5B_syhwQ7kNvwGbfpqj&_nc_oc=Adn4YGUHBEWj93HSj07hh5DgW8Z8mfjU-XvQhaf7-zaWPdhsLm5lOB-3re_AKl8LXaM&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&_nc_gid=Uep5brxVfioQOib4W2c9tg&oh=00_AfYuJ38qQupd5ilgARoFPiqe_HQOP_lph6DVFXAnLWLtfg&oe=68CAE2CA" 
                alt="Warrior Spirit Taekwondo Team Spirit" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-semibold">Team Spirit</h3>
                <p className="text-sm text-gray-200">Unity and brotherhood</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src="https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/496034097_662862939838152_1085059842057941832_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGMbVuqKrHCEF0dF45-Ax3vD3CrjTRowYkPcKuNNGjBiRmKZC8eaHT7uB8-ziaR4okOWmP84H9uFIJwzyQ90nNR&_nc_ohc=SMRr2AfWYY4Q7kNvwFWF4jR&_nc_oc=AdlN5cqQjX1rJp0oUxNtJgl6y_zgREQKgxa5fCEHStzHXbKVOdIWSjlEr2QvDZQ4S48&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&_nc_gid=bqxAEpDO17zwwKQHPnFpMA&oh=00_Afa_TR_MuUN2br6FoB-pXwJRPUPFHtzWi3MGSaLljyqxYA&oe=68CB078F" 
                alt="Warrior Spirit Taekwondo Group Training" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-semibold">High Kicks</h3>
                <p className="text-sm text-gray-200">Perfect your kicks</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src="https://scontent.fktm7-1.fna.fbcdn.net/v/t51.75761-15/491536135_17904714726112995_7358130820592811689_n.webp?stp=dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH3abHWF-pNg9pI4YTEzCjbh2RVIW7X20WHZFUhbtfbRQTJ3MCm_EhL7BF1bTvnv7GotGtNeeF-DrpGWeAFEUZq&_nc_ohc=DJgAO_q7TY0Q7kNvwG3bbin&_nc_oc=Adk-1gGPoxkQ--PsgXi0zKcQaOdPSqDhQt05iT2-vfXOVjyGckA2PqHF0ZyzQH_C7U8&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&_nc_gid=7CYfC0JqGTHCtfKI_nFGGw&oh=00_AfZLGxDRTNX1UhaIVDPp5C-uJQh_qWqjd65PmmxZUns2iw&oe=68CB0251" 
                alt="Warrior Spirit Taekwondo Technique Practice" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-semibold">Refree</h3>
                <p className="text-sm text-gray-200">being a refree in a tournament</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src="https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/518317820_122129356820834928_4502695549870773383_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF3jqmANpTgv4Pzlyzw4YSYz9_om_CFGyvP3-ib8IUbK2uUpBuacUWeYr_eOZLJf-WIfJsu8HeueWUeTz3ehUuh&_nc_ohc=fGhqHPHKBYIQ7kNvwEonQ0q&_nc_oc=Adl8B-1grCjO85RCaBwT7uZew-1ZAExcNOdyMVhaYGV3uc7EYQol-Z_sfzOtkpC6LtE&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&_nc_gid=LoG2E7LwuQ92pfW-H4Po-A&oh=00_AfaIMPJfYefKHPBGTAialqaFH3oJwu5VFLHiitNLR57dAQ&oe=68CB0842" 
                alt="Warrior Spirit Taekwondo Advanced Training" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-semibold">Teacher's day</h3>
                <p className="text-sm text-gray-200">Celebrating teacher's day together</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src="https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/526757935_724533517004427_1443331203524690785_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGX9e3hDkxagr_2-s12EftXAn9YXqbinL8Cf1hepuKcv7m3pcZSrcyVp7LNBRV76sirCbTrZgupHGbIV2Lmf6yb&_nc_ohc=Cd9sEUxZbW8Q7kNvwFiiM-z&_nc_oc=Adma97qjX3bMJ1fK13kuIZW61QHUjGZffd9z1ay5fJg2vJgCF4ETnfhAxcqoEs5Kj0s&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&_nc_gid=YfSOH9yUtwmiHpwcCgCpNw&oh=00_AfaR5eYHxhYF7Nez-P_LhpvehynvJ6QWSaghd6akoig0mw&oe=68CB0CE5" 
                alt="Warrior Spirit Taekwondo Community Event" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-semibold">Community Event</h3>
                <p className="text-sm text-gray-200">Celebrating achievements</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src="https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/528159136_727740480017064_1494061523669511963_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHryeh42A-DVm9SQzKNBdL4_cDfQw6n0_79wN9DDqfT_i3i1lfQWdsGk68byP3xInu0oqK84u31AGDxlMqGl1Ls&_nc_ohc=7QWzz9BwQCcQ7kNvwEzTHLB&_nc_oc=AdleC39tmivN41D3HJ4_qYbj7MLxFg9Ckj8FqqaJDf1SC3s9Bz4CTBJHs8nyFRrbuRE&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&_nc_gid=aVbPxBlYUUS9l7sGAL9ung&oh=00_AfZN7hxNXF7I6IkFZp57PS8j06HHOP0KJ1ov17taXxqwXg&oe=68CB0755" 
                alt="Warrior Spirit Taekwondo Outdoor Training" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-semibold">Outdoor Training</h3>
                <p className="text-sm text-gray-200">Training in nature</p>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="bg-gradient-to-r from-green-600 to-red-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">See More on Social Media</h3>
            <p className="text-red-100 mb-6">
              Follow us for daily updates, training videos, and behind-the-scenes content
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://www.facebook.com/warriorspirittaekwondoclub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>📘</span>
                <span>Facebook</span>
              </a>
              
              <a 
                href="https://www.instagram.com/warrior_martial_academy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>📷</span>
                <span>Instagram</span>
              </a>
              
              <a 
                href="https://tiktok.com/@warrior%20Spirit%20Taekwondo%20Club%20" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>🎵</span>
                <span>TikTok</span>
              </a>
            </div>
            
            <div className="mt-6 text-red-100 text-sm">
              <p>Stay connected with our martial arts community!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coach Section */}
      <section id="coach" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Your <span className="bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent">Master</span>
            </h2>
            <p className="text-lg text-gray-600">Learn from experienced and dedicated instructors</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 p-8 flex items-center justify-center bg-gradient-to-br from-green-600 to-red-600">
                  <img 
                    src="https://scontent.fktm7-1.fna.fbcdn.net/v/t1.15752-9/541952548_2547648175607133_3735880938668504109_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=EAe3SJr904YQ7kNvwHgzaww&_nc_oc=AdlSznHDAiT_a1BHYOMqP-JXIhvmVMZIcQh7c-F8UqbCBo7Fcws50yDZUv6CNvX9bes&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&oh=03_Q7cD3QGBO8mo3RVWBOnbkmDyoCMIZE6FWBhu7brplolCKN5ajQ&oe=68EB083E" 
                    alt="Master Ramsharan Guru" 
                    className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Master Ramsharan Guru</h3>
                  <p className="text-green-700 font-semibold mb-4">Head Instructor & Founder</p>
                  
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Master Ramsharan Guru brings over 12+ years of dedicated experience in Taekwondo instruction and practice. 
                      His journey in martial arts began in his youth, and he has since earned multiple black belt degrees and 
                      certifications from international Taekwondo federations.
                    </p>
                    
                    <p>
                      Known for his patient teaching style and deep understanding of Taekwondo philosophy, Master Guru has 
                      successfully trained hundreds of students, from young children taking their first steps in martial arts 
                      to competitive athletes representing Nepal in international tournaments.
                    </p>
                    
                    <p>
                      Throughout his distinguished career, Master Guru has worked with several of the most renowned schools, 
                      producing over 300 Black Belts, 100+ Second Dans, and 30+ Third Dans, while teaching 500+ students daily. 
                      His dedication to excellence and systematic approach to training has established him as one of Nepal's 
                      most respected Taekwondo instructors.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900">Specializations</h4>
                        <ul className="text-sm text-gray-600 mt-2 space-y-1">
                          <li>• Traditional Taekwondo Forms</li>
                          <li>• Competition Training</li>
                          <li>• Self-Defense Techniques</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900">Achievements</h4>
                        <ul className="text-sm text-gray-600 mt-2 space-y-1">
                          <li>• 4th Dan Black Belt</li>
                          <li>• Certified International Instructor</li>
                          <li>• 12+ Years Teaching Experience</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fees Structure Section */}
      <section id="fees" className="py-20 bg-gradient-to-br from-gray-900 via-black to-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Fees <span className="bg-gradient-to-r from-green-400 to-red-600 bg-clip-text text-transparent">Structure</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Affordable training packages designed to fit your budget and commitment level
            </p>
          </div>

          {/* Admission Fee */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-green-600 to-red-600 p-8 rounded-2xl shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Admission Fee</h3>
                <div className="text-4xl font-bold text-white mb-2">NPR 5,000</div>
                <p className="text-red-100">One-time registration fee</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">What's Included:</h4>
                  <ul className="space-y-3 text-red-100">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      1 Complete Taekwondo Dress (Dobok)
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      1 Club T-Shirt
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Official Club Membership
                    </li>
                  </ul>
                </div>
                
                <div className="bg-yellow-500/20 backdrop-blur-sm rounded-xl p-6 border-2 border-yellow-400">
                  <h4 className="text-lg font-semibold text-yellow-300 mb-4">🎉 Special Offer!</h4>
                  <p className="text-white font-semibold mb-2">Festival Discount</p>
                  <p className="text-yellow-100 text-sm">
                    Join during any festival and get <span className="font-bold text-yellow-300">15% OFF</span> on Admission Fee!
                  </p>
                  <div className="mt-3 text-yellow-300 font-bold">
                    Festival Price: NPR 4,250
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Training Packages */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Monthly Package */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-gray-600 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">Monthly</h3>
                <div className="text-3xl font-bold text-green-400 mb-4">NPR 2,500</div>
                <p className="text-gray-300 text-sm mb-6">Perfect for trying out</p>
                <ul className="space-y-2 text-gray-300 text-sm mb-6">
                  <li>✓ 30 days access</li>
                  <li>✓ All regular classes</li>
                  <li>✓ Basic training materials</li>
                </ul>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Choose Plan
                </button>
              </div>
            </div>

            {/* 3 Months Package */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-gray-600 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">3 Months</h3>
                <div className="text-3xl font-bold text-green-400 mb-1">NPR 7,000</div>
                <div className="text-sm text-gray-400 mb-4">Save NPR 500</div>
                <p className="text-gray-300 text-sm mb-6">Great for beginners</p>
                <ul className="space-y-2 text-gray-300 text-sm mb-6">
                  <li>✓ 90 days access</li>
                  <li>✓ All regular classes</li>
                  <li>✓ Progress tracking</li>
                  <li>✓ Belt testing eligible</li>
                </ul>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Choose Plan
                </button>
              </div>
            </div>

            {/* 6 Months Package */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-gray-600 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">6 Months</h3>
                <div className="text-3xl font-bold text-green-400 mb-1">NPR 14,000</div>
                <div className="text-sm text-gray-400 mb-4">Save NPR 1,000</div>
                <p className="text-gray-300 text-sm mb-6">Serious commitment</p>
                <ul className="space-y-2 text-gray-300 text-sm mb-6">
                  <li>✓ 180 days access</li>
                  <li>✓ All classes + workshops</li>
                  <li>✓ Personal guidance</li>
                  <li>✓ Competition preparation</li>
                </ul>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Choose Plan
                </button>
              </div>
            </div>

            {/* 1 Year Package - Best Value */}
            <div className="bg-gradient-to-br from-green-600 to-red-600 rounded-2xl p-6 border-2 border-yellow-400 relative transform hover:-translate-y-2 transition-all duration-300 shadow-2xl">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black font-bold px-4 py-1 rounded-full text-sm">
                  BEST VALUE
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">1 Year</h3>
                <div className="text-3xl font-bold text-white mb-1">NPR 28,000</div>
                <div className="text-sm text-yellow-200 mb-4">Save NPR 2,000</div>
                <p className="text-red-100 text-sm mb-6">Maximum savings</p>
                <ul className="space-y-2 text-red-100 text-sm mb-6">
                  <li>✓ 365 days access</li>
                  <li>✓ All classes + workshops</li>
                  <li>✓ Personal training sessions</li>
                  <li>✓ Competition team eligible</li>
                  <li>✓ Free belt testing</li>
                </ul>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-white text-green-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Choose Plan
                </button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
              <h4 className="text-lg font-semibold text-white mb-4">Payment Information</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                <div>
                  <p className="font-semibold text-green-400 mb-2">Payment Methods:</p>
                  <ul className="space-y-1">
                    <li>• Cash Payment</li>
                    <li>• Bank Transfer</li>
                    <li>• Mobile Banking</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-green-400 mb-2">Additional Benefits:</p>
                  <ul className="space-y-1">
                    <li>• Free trial class</li>
                    <li>• Flexible scheduling</li>
                    <li>• Family discounts available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code Payment Section */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-green-600 to-red-600 rounded-2xl p-8 max-w-md mx-auto">
              <h4 className="text-2xl font-bold text-white mb-4">📱 Quick Payment</h4>
              <p className="text-red-100 mb-6">Scan QR Code for instant payment via Phone Pay</p>
              
              <div className="bg-white rounded-xl p-4 mb-6 inline-block shadow-2xl">
                <img 
                  src="https://scontent.fktm7-1.fna.fbcdn.net/v/t1.15752-9/548683562_1435929630804945_2547115220267373643_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=PA-SAJaJDHAQ7kNvwGW3-Kw&_nc_oc=AdlBCZnTyJaSdOWGqrNRRRoKRGswJkO2JrsYS3XVn0SVXLdOy6t9avi0WD3BRRHJf_s&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&oh=03_Q7cD3QG5zjeoFrwgLKH0OKdu_kmO1FNTfkTISM5ON1QWpw4zuQ&oe=68EC7839" 
                  alt="Phone Pay QR Code for Warrior Spirit Taekwondo Club" 
                  className="w-48 h-48 object-contain mx-auto"
                />
              </div>
              
              <div className="space-y-2 text-red-100">
                <p className="font-semibold">How to Pay:</p>
                <div className="text-sm space-y-1">
                  <p>1. Open your Phone Pay app</p>
                  <p>2. Scan the QR code above</p>
                  <p>3. Enter the payment amount</p>
                  <p>4. Complete the transaction</p>
                </div>
              </div>
              
              <div className="mt-6 bg-white/20 rounded-lg p-3">
                <p className="text-white font-semibold text-sm">
                  💡 After payment, please contact us at 970-6418555 to confirm your enrollment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In <span className="bg-gradient-to-r from-green-400 to-red-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg text-gray-300">Ready to begin your Taekwondo journey? Contact us today!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-red-600 rounded-full flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Call Us</h3>
                  <p className="text-gray-300">970-6418555</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-red-600 rounded-full flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Visit Us</h3>
                  <p className="text-gray-300">THE ECA HEAVEN</p>
                  <p className="text-gray-300">P9X4+GJW, Budhanilkantha, Kathmandu 44600</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Why Choose Us?</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Experienced and certified instructors</li>
                  <li>✓ Small class sizes for personalized attention</li>
                  <li>✓ Safe and supportive learning environment</li>
                  <li>✓ Flexible scheduling options</li>
                  <li>✓ Free trial class for new students</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Start Your Journey?</h3>
              <p className="text-gray-300 mb-6">
                Join our martial arts family and discover the warrior spirit within you. 
                Contact us today to begin your Taekwondo training!
              </p>
              <button
                onClick={() => window.open('tel:970-6418555', '_self')}
                className="bg-gradient-to-r from-green-600 to-red-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:from-green-700 hover:to-red-700"
              >
                Call Now: 970-6418555
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                <div className="flex items-center space-x-2">
                  <img 
                    src="https://scontent.fktm7-1.fna.fbcdn.net/v/t1.15752-9/545813076_1799170757384368_3722058886634288936_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=l_R85GiUNnEQ7kNvwHDW37i&_nc_oc=Adl8kBGr6vWbDuGn3-zbunvTI4Jno5-2larOsfwz4x7Ptrqhrlz12pePG_tHVxsSOPM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&oh=03_Q7cD3QH0caOuMRNtLfOMFr_WP_7x3JET1C2WYtHVDkmqa-zdLA&oe=68EB13F9" 
                    alt="Logo" 
                    className="w-8 h-8 rounded-full"
                  />
                  <span>Warrior Spirit Taekwondo Club</span>
                </div>
              </h3>
              <p className="text-gray-400">
                Empowering students through the art of Taekwondo with discipline, respect, and excellence.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('hero')} className="hover:text-green-400 transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('location')} className="hover:text-green-400 transition-colors">Location</button></li>
                <li><button onClick={() => scrollToSection('schedule')} className="hover:text-green-400 transition-colors">Schedule</button></li>
                <li><button onClick={() => scrollToSection('fees')} className="hover:text-green-400 transition-colors">Fees</button></li>
                <li><button onClick={() => scrollToSection('gallery')} className="hover:text-green-400 transition-colors">Gallery</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-green-400 transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>📞 970-6418555</p>
                <p>📍 THE ECA HEAVEN</p>
                <p>Budhanilkantha, Kathmandu 44600</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Warrior Spirit Taekwondo Club. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;