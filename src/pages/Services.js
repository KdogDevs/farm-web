import React from 'react';
import { View, Text, StyleSheet } from 'react-native-web';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Stall Board',
      icon: '🏠',
      description: 'Full-service stall boarding with daily turnout and individualized care.',
      features: [
        'Daily stall cleaning',
        'Individual feeding programs',
        'Daily turnout in paddocks',
        'Blanketing service',
        'Supplements administered',
        'Hay and shavings included',
      ],
      ideal: 'Ideal for horses requiring regular stall time and individualized attention',
    },
    {
      title: 'Run-In Board',
      icon: '🌾',
      description: 'Pasture board with run-in shelter access for horses that thrive on turnout.',
      features: [
        'Full-time pasture access',
        'Run-in shelter',
        'Group or individual turnout',
        'Daily feeding',
        'Hay provided year-round',
        'Regular hoof care monitoring',
      ],
      ideal: 'Perfect for horses that prefer outdoor living with shelter access',
    },
    {
      title: 'Arena Rental',
      icon: '🏛️',
      description: 'Rent our covered or outdoor arena for training, lessons, or events.',
      features: [
        'Hourly or daily rental',
        'Professional footing',
        'Jump equipment available',
        'Dressage setup available',
        'Climate-controlled covered arena',
        'Parking for trailers',
      ],
      ideal: 'Great for trainers, clinics, and individual riders needing quality facilities',
    },
    {
      title: 'Training Services',
      icon: '⭐',
      description: 'Professional training programs tailored to your horse and your goals.',
      features: [
        'Riding instruction',
        'Horse training programs',
        'Ground work',
        'Problem solving',
        'Show preparation',
        'Customized training plans',
      ],
      ideal: 'For horses and riders looking to improve skills and reach new goals',
    },
    {
      title: 'Lessons',
      icon: '📚',
      description: 'Riding lessons for all ages and skill levels.',
      features: [
        'Beginner to advanced',
        'Private or group lessons',
        'English and Western',
        'Jumping instruction',
        'Dressage basics',
        'Safety-focused teaching',
      ],
      ideal: 'Perfect for riders wanting to develop or refine their riding skills',
    },
    {
      title: 'Event Hosting',
      icon: '🎪',
      description: 'Host your equestrian event at our facility.',
      features: [
        'Clinics and workshops',
        'Horse shows',
        'Group riding events',
        'Private parties',
        'Facility rental packages',
        'Trailer parking available',
      ],
      ideal: 'Excellent venue for equestrian events and gatherings',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Our Services</Text>
          <Text style={styles.headerSubtitle}>
            Comprehensive equestrian services designed to meet all your needs
          </Text>
        </View>
      </View>

      {/* Services Section */}
      <View style={styles.section}>
        <View style={styles.sectionContainer}>
          <View style={styles.servicesGrid}>
            {services.map((service, index) => (
              <View key={index} style={styles.serviceCard}>
                <View style={styles.serviceHeader}>
                  <Text style={styles.serviceIcon}>{service.icon}</Text>
                  <Text style={styles.serviceTitle}>{service.title}</Text>
                </View>
                <Text style={styles.serviceDescription}>
                  {service.description}
                </Text>
                <View style={styles.featuresList}>
                  {service.features.map((feature, idx) => (
                    <View key={idx} style={styles.featureItem}>
                      <Text style={styles.featureBullet}>✓</Text>
                      <Text style={styles.featureText}>{feature}</Text>
                    </View>
                  ))}
                </View>
                <View style={styles.idealBox}>
                  <Text style={styles.idealLabel}>Perfect For:</Text>
                  <Text style={styles.idealText}>{service.ideal}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Additional Services */}
      <View style={styles.additionalSection}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Additional Amenities</Text>
          <View style={styles.amenitiesGrid}>
            <View style={styles.amenityItem}>
              <Text style={styles.amenityIcon}>🚿</Text>
              <Text style={styles.amenityText}>Wash Racks</Text>
            </View>
            <View style={styles.amenityItem}>
              <Text style={styles.amenityIcon}>🛒</Text>
              <Text style={styles.amenityText}>Tack Storage</Text>
            </View>
            <View style={styles.amenityItem}>
              <Text style={styles.amenityIcon}>🚗</Text>
              <Text style={styles.amenityText}>Trailer Parking</Text>
            </View>
            <View style={styles.amenityItem}>
              <Text style={styles.amenityIcon}>📹</Text>
              <Text style={styles.amenityText}>Security Cameras</Text>
            </View>
            <View style={styles.amenityItem}>
              <Text style={styles.amenityIcon}>🌲</Text>
              <Text style={styles.amenityText}>Riding Trails</Text>
            </View>
            <View style={styles.amenityItem}>
              <Text style={styles.amenityIcon}>💡</Text>
              <Text style={styles.amenityText}>Night Lighting</Text>
            </View>
          </View>
        </View>
      </View>

      {/* CTA Section */}
      <View style={styles.ctaSection}>
        <View style={styles.sectionContainer}>
          <Text style={styles.ctaTitle}>Ready to Learn More?</Text>
          <Text style={styles.ctaText}>
            Contact us to discuss which services are right for you and your horse
          </Text>
          <View style={styles.ctaButtons}>
            <Link to="/pricing" style={{ textDecoration: 'none' }}>
              <View style={styles.primaryButton}>
                <Text style={styles.primaryButtonText}>View Pricing</Text>
              </View>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <View style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>Contact Us</Text>
              </View>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#2c5f2d',
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  headerContent: {
    maxWidth: 1200,
    marginHorizontal: 'auto',
    textAlign: 'center',
  },
  headerTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    '@media (max-width: 768px)': {
      fontSize: 32,
    },
  },
  headerSubtitle: {
    fontSize: 20,
    color: '#e9ecef',
    maxWidth: 700,
    marginHorizontal: 'auto',
    '@media (max-width: 768px)': {
      fontSize: 16,
    },
  },
  section: {
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  sectionContainer: {
    maxWidth: 1200,
    marginHorizontal: 'auto',
    width: '100%',
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 32,
  },
  serviceCard: {
    flex: 1,
    minWidth: 350,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 32,
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    '@media (max-width: 768px)': {
      minWidth: '100%',
    },
  },
  serviceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  serviceIcon: {
    fontSize: 36,
  },
  serviceTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c5f2d',
  },
  serviceDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 20,
  },
  featuresList: {
    gap: 8,
    marginBottom: 20,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  featureBullet: {
    fontSize: 16,
    color: '#2c5f2d',
    fontWeight: 'bold',
  },
  featureText: {
    fontSize: 15,
    color: '#555',
    flex: 1,
  },
  idealBox: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 6,
    borderLeftWidth: 4,
    borderLeftColor: '#2c5f2d',
  },
  idealLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2c5f2d',
    marginBottom: 4,
  },
  idealText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  additionalSection: {
    backgroundColor: '#f8f9fa',
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2c5f2d',
    marginBottom: 40,
    textAlign: 'center',
    '@media (max-width: 768px)': {
      fontSize: 28,
    },
  },
  amenitiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 24,
    justifyContent: 'center',
  },
  amenityItem: {
    alignItems: 'center',
    minWidth: 150,
    padding: 20,
  },
  amenityIcon: {
    fontSize: 48,
    marginBottom: 8,
  },
  amenityText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  ctaSection: {
    backgroundColor: '#2c5f2d',
    paddingVertical: 60,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  ctaTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    '@media (max-width: 768px)': {
      fontSize: 28,
    },
  },
  ctaText: {
    fontSize: 18,
    color: '#e9ecef',
    marginBottom: 32,
  },
  ctaButtons: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryButton: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 6,
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#f8f9fa',
    },
  },
  primaryButtonText: {
    color: '#2c5f2d',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderRadius: 6,
    cursor: 'pointer',
  },
  secondaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Services;
