import React from 'react';
import { View, Text, StyleSheet } from 'react-native-web';
import { Link } from 'react-router-dom';

const Facilities = () => {
  const facilities = [
    {
      title: 'Covered Arena',
      description: 'Our professional covered arena provides year-round riding in any weather. Perfect for training, lessons, and events.',
      features: [
        'Climate-controlled environment',
        '120\' x 200\' riding area',
        'Professional footing',
        'Full lighting system',
        'Available for rental',
      ],
    },
    {
      title: 'Outdoor Arena',
      description: 'Spacious outdoor arena with excellent footing for jumping and dressage work.',
      features: [
        '150\' x 250\' riding area',
        'Sand and fiber footing',
        'Jump standards available',
        'Dressage letters',
        'Viewing area',
      ],
    },
    {
      title: 'Stalls',
      description: 'Clean, spacious stalls with excellent ventilation and natural light.',
      features: [
        '12\' x 12\' matted stalls',
        'Automatic waterers',
        'Daily cleaning',
        'Individual feed programs',
        'Secure tack rooms',
      ],
    },
    {
      title: 'Run-in Sheds & Pastures',
      description: 'Well-maintained pastures with run-in sheds for horses that prefer turnout boarding.',
      features: [
        'Ample grazing space',
        'Safe fencing',
        'Water troughs',
        'Shelter from elements',
        'Regular field maintenance',
      ],
    },
    {
      title: 'Wash Racks',
      description: 'Convenient wash racks with hot and cold water for all your grooming needs.',
      features: [
        'Hot and cold water',
        'Rubber mats',
        'Cross ties',
        'Storage for grooming supplies',
        'Good drainage',
      ],
    },
    {
      title: 'Trails',
      description: 'Enjoy scenic riding trails throughout our property.',
      features: [
        'Miles of trails',
        'Varied terrain',
        'Well-maintained paths',
        'Beautiful scenery',
        'Safe for all skill levels',
      ],
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Our Facilities</Text>
          <Text style={styles.headerSubtitle}>
            Explore our world-class equestrian facilities designed for the comfort
            and care of your horses
          </Text>
        </View>
      </View>

      {/* Facilities Grid */}
      <View style={styles.section}>
        <View style={styles.sectionContainer}>
          <View style={styles.facilitiesGrid}>
            {facilities.map((facility, index) => (
              <View key={index} style={styles.facilityCard}>
                {/* Placeholder for facility image */}
                <View style={styles.facilityImagePlaceholder}>
                  <Text style={styles.placeholderText}>{facility.title}</Text>
                </View>
                <View style={styles.facilityContent}>
                  <Text style={styles.facilityTitle}>{facility.title}</Text>
                  <Text style={styles.facilityDescription}>
                    {facility.description}
                  </Text>
                  <View style={styles.featuresList}>
                    {facility.features.map((feature, idx) => (
                      <View key={idx} style={styles.featureItem}>
                        <Text style={styles.featureBullet}>✓</Text>
                        <Text style={styles.featureText}>{feature}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Arena Rental CTA */}
      <View style={styles.rentalSection}>
        <View style={styles.sectionContainer}>
          <Text style={styles.rentalTitle}>Interested in Arena Rental?</Text>
          <Text style={styles.rentalText}>
            Our covered arena is available for training, lessons, clinics, and events.
            Contact us for availability and rates.
          </Text>
          <View style={styles.rentalButtons}>
            <Link to="/pricing" style={{ textDecoration: 'none' }}>
              <View style={styles.primaryButton}>
                <Text style={styles.primaryButtonText}>View Pricing</Text>
              </View>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <View style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>Schedule a Tour</Text>
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
  facilitiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 32,
  },
  facilityCard: {
    flex: 1,
    minWidth: 350,
    backgroundColor: '#fff',
    borderRadius: 8,
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    '@media (max-width: 768px)': {
      minWidth: '100%',
    },
  },
  facilityImagePlaceholder: {
    height: 200,
    backgroundColor: '#e9ecef',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 18,
    color: '#6c757d',
    fontWeight: '600',
  },
  facilityContent: {
    padding: 24,
  },
  facilityTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c5f2d',
    marginBottom: 12,
  },
  facilityDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 20,
  },
  featuresList: {
    gap: 8,
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
  rentalSection: {
    backgroundColor: '#f8f9fa',
    paddingVertical: 60,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  rentalTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2c5f2d',
    marginBottom: 16,
    '@media (max-width: 768px)': {
      fontSize: 28,
    },
  },
  rentalText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 32,
    maxWidth: 700,
    marginHorizontal: 'auto',
  },
  rentalButtons: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryButton: {
    backgroundColor: '#2c5f2d',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 6,
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#234d24',
    },
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#2c5f2d',
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderRadius: 6,
    cursor: 'pointer',
  },
  secondaryButtonText: {
    color: '#2c5f2d',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Facilities;
