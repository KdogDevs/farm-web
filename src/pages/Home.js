import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native-web';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>Welcome to Our Equestrian Facility</Text>
          <Text style={styles.heroSubtitle}>
            Premium boarding, training, and arena rental services for your horses
          </Text>
          <View style={styles.heroButtons}>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <View style={styles.primaryButton}>
                <Text style={styles.primaryButtonText}>Schedule a Visit</Text>
              </View>
            </Link>
            <Link to="/services" style={{ textDecoration: 'none' }}>
              <View style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>View Services</Text>
              </View>
            </Link>
          </View>
        </View>
        {/* Placeholder for hero image */}
        <View style={styles.heroImagePlaceholder}>
          <Text style={styles.placeholderText}>Hero Image</Text>
        </View>
      </View>

      {/* Features Section */}
      <View style={styles.section}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Why Choose Us</Text>
          <View style={styles.features}>
            <View style={styles.featureCard}>
              <View style={styles.featureIcon}>
                <Text style={styles.featureIconText}>🏛️</Text>
              </View>
              <Text style={styles.featureTitle}>Covered Arena</Text>
              <Text style={styles.featureText}>
                Professional covered arena available for training and events
              </Text>
            </View>
            <View style={styles.featureCard}>
              <View style={styles.featureIcon}>
                <Text style={styles.featureIconText}>🐴</Text>
              </View>
              <Text style={styles.featureTitle}>Premium Boarding</Text>
              <Text style={styles.featureText}>
                Stall board and run-in board options with excellent care
              </Text>
            </View>
            <View style={styles.featureCard}>
              <View style={styles.featureIcon}>
                <Text style={styles.featureIconText}>⭐</Text>
              </View>
              <Text style={styles.featureTitle}>Expert Care</Text>
              <Text style={styles.featureText}>
                Experienced staff dedicated to your horse's well-being
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* About Section */}
      <View style={styles.aboutSection}>
        <View style={styles.sectionContainer}>
          <View style={styles.aboutContent}>
            <View style={styles.aboutText}>
              <Text style={styles.sectionTitle}>About Our Facility</Text>
              <Text style={styles.paragraph}>
                Our farm offers top-quality equestrian facilities with a focus on
                the health and happiness of your horses. Located on beautiful
                countryside property, we provide a peaceful and professional
                environment for both horses and riders.
              </Text>
              <Text style={styles.paragraph}>
                Whether you're looking for boarding options, arena rental for
                training, or a place to host events, we have the facilities and
                expertise to meet your needs.
              </Text>
              <Link to="/facilities" style={{ textDecoration: 'none' }}>
                <View style={styles.primaryButton}>
                  <Text style={styles.primaryButtonText}>Explore Facilities</Text>
                </View>
              </Link>
            </View>
            {/* Placeholder for about image */}
            <View style={styles.aboutImagePlaceholder}>
              <Text style={styles.placeholderText}>Facility Image</Text>
            </View>
          </View>
        </View>
      </View>

      {/* CTA Section */}
      <View style={styles.ctaSection}>
        <View style={styles.sectionContainer}>
          <Text style={styles.ctaTitle}>Ready to Get Started?</Text>
          <Text style={styles.ctaText}>
            Schedule a tour of our facility and see what we have to offer
          </Text>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <View style={styles.ctaButton}>
              <Text style={styles.ctaButtonText}>Contact Us Today</Text>
            </View>
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hero: {
    backgroundColor: '#f8f9fa',
    paddingVertical: 80,
    paddingHorizontal: 20,
  },
  heroContent: {
    maxWidth: 1200,
    marginHorizontal: 'auto',
    alignItems: 'center',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2c5f2d',
    marginBottom: 16,
    '@media (max-width: 768px)': {
      fontSize: 32,
    },
  },
  heroSubtitle: {
    fontSize: 20,
    color: '#666',
    marginBottom: 32,
    maxWidth: 600,
    '@media (max-width: 768px)': {
      fontSize: 16,
    },
  },
  heroButtons: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 40,
  },
  heroImagePlaceholder: {
    maxWidth: 1200,
    marginHorizontal: 'auto',
    marginTop: 40,
    height: 400,
    backgroundColor: '#e9ecef',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 18,
    color: '#6c757d',
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
  sectionTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2c5f2d',
    marginBottom: 32,
    textAlign: 'center',
    '@media (max-width: 768px)': {
      fontSize: 28,
    },
  },
  features: {
    flexDirection: 'row',
    gap: 32,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  featureCard: {
    flex: 1,
    minWidth: 280,
    maxWidth: 350,
    backgroundColor: '#fff',
    padding: 32,
    borderRadius: 8,
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    alignItems: 'center',
    textAlign: 'center',
  },
  featureIcon: {
    marginBottom: 16,
  },
  featureIconText: {
    fontSize: 48,
  },
  featureTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  featureText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  aboutSection: {
    backgroundColor: '#f8f9fa',
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  aboutContent: {
    flexDirection: 'row',
    gap: 48,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  aboutText: {
    flex: 1,
    minWidth: 300,
  },
  paragraph: {
    fontSize: 16,
    color: '#666',
    lineHeight: 28,
    marginBottom: 20,
  },
  aboutImagePlaceholder: {
    flex: 1,
    minWidth: 300,
    height: 400,
    backgroundColor: '#e9ecef',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
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
    transition: 'all 0.2s',
    ':hover': {
      backgroundColor: '#2c5f2d',
    },
  },
  secondaryButtonText: {
    color: '#2c5f2d',
    fontSize: 16,
    fontWeight: '600',
    ':hover': {
      color: '#fff',
    },
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
  ctaButton: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 6,
    alignSelf: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#f8f9fa',
    },
  },
  ctaButtonText: {
    color: '#2c5f2d',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Home;
