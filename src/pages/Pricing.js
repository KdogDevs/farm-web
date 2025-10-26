import React from 'react';
import { View, Text, StyleSheet } from 'react-native-web';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const boardingPrices = [
    {
      title: 'Stall Board',
      price: '$550',
      period: 'per month',
      features: [
        'Daily stall cleaning',
        'Individual feeding program',
        'Daily turnout',
        'Hay and shavings included',
        'Blanketing service',
        'Supplement administration',
      ],
      popular: true,
    },
    {
      title: 'Run-In Board',
      price: '$350',
      period: 'per month',
      features: [
        'Full-time pasture access',
        'Run-in shelter',
        'Daily feeding',
        'Hay provided year-round',
        'Group or individual turnout',
        'Regular monitoring',
      ],
      popular: false,
    },
  ];

  const arenaRental = [
    {
      title: 'Hourly Rental',
      price: '$35',
      period: 'per hour',
      description: 'Perfect for individual training sessions',
    },
    {
      title: 'Half-Day Rental',
      price: '$150',
      period: '4 hours',
      description: 'Great for clinics and group lessons',
    },
    {
      title: 'Full-Day Rental',
      price: '$250',
      period: '8 hours',
      description: 'Ideal for shows and large events',
    },
  ];

  const additionalServices = [
    { service: 'Riding Lessons (Private)', price: '$60/hour' },
    { service: 'Riding Lessons (Group)', price: '$45/hour' },
    { service: 'Horse Training', price: '$500/month' },
    { service: 'Blanketing (Non-Boarders)', price: '$5/day' },
    { service: 'Holding for Vet/Farrier', price: '$25/visit' },
    { service: 'Trailer Parking', price: 'Free for boarders' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Pricing</Text>
          <Text style={styles.headerSubtitle}>
            Transparent pricing for all our services and facilities
          </Text>
        </View>
      </View>

      {/* Boarding Prices */}
      <View style={styles.section}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Boarding Options</Text>
          <View style={styles.pricingGrid}>
            {boardingPrices.map((plan, index) => (
              <View
                key={index}
                style={[
                  styles.pricingCard,
                  plan.popular && styles.popularCard,
                ]}
              >
                {plan.popular && (
                  <View style={styles.popularBadge}>
                    <Text style={styles.popularBadgeText}>MOST POPULAR</Text>
                  </View>
                )}
                <Text style={styles.planTitle}>{plan.title}</Text>
                <View style={styles.priceContainer}>
                  <Text style={styles.price}>{plan.price}</Text>
                  <Text style={styles.period}>{plan.period}</Text>
                </View>
                <View style={styles.featuresList}>
                  {plan.features.map((feature, idx) => (
                    <View key={idx} style={styles.featureItem}>
                      <Text style={styles.featureBullet}>✓</Text>
                      <Text style={styles.featureText}>{feature}</Text>
                    </View>
                  ))}
                </View>
                <Link to="/contact" style={{ textDecoration: 'none', marginTop: 'auto' }}>
                  <View style={styles.selectButton}>
                    <Text style={styles.selectButtonText}>Get Started</Text>
                  </View>
                </Link>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Arena Rental */}
      <View style={styles.alternateSection}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Arena Rental</Text>
          <View style={styles.rentalGrid}>
            {arenaRental.map((rental, index) => (
              <View key={index} style={styles.rentalCard}>
                <Text style={styles.rentalTitle}>{rental.title}</Text>
                <View style={styles.rentalPriceContainer}>
                  <Text style={styles.rentalPrice}>{rental.price}</Text>
                  <Text style={styles.rentalPeriod}>{rental.period}</Text>
                </View>
                <Text style={styles.rentalDescription}>
                  {rental.description}
                </Text>
              </View>
            ))}
          </View>
          <View style={styles.rentalNote}>
            <Text style={styles.rentalNoteText}>
              * Covered arena rental includes climate control, full lighting, and professional footing
            </Text>
            <Text style={styles.rentalNoteText}>
              * Jump equipment and dressage letters available upon request
            </Text>
          </View>
        </View>
      </View>

      {/* Additional Services */}
      <View style={styles.section}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Additional Services</Text>
          <View style={styles.servicesTable}>
            {additionalServices.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.serviceRow,
                  index % 2 === 0 && styles.serviceRowAlt,
                ]}
              >
                <Text style={styles.serviceName}>{item.service}</Text>
                <Text style={styles.servicePrice}>{item.price}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* CTA Section */}
      <View style={styles.ctaSection}>
        <View style={styles.sectionContainer}>
          <Text style={styles.ctaTitle}>Questions About Pricing?</Text>
          <Text style={styles.ctaText}>
            We're happy to discuss custom packages and answer any questions you may have
          </Text>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <View style={styles.ctaButton}>
              <Text style={styles.ctaButtonText}>Contact Us</Text>
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
  alternateSection: {
    backgroundColor: '#f8f9fa',
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
    marginBottom: 40,
    textAlign: 'center',
    '@media (max-width: 768px)': {
      fontSize: 28,
    },
  },
  pricingGrid: {
    flexDirection: 'row',
    gap: 32,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  pricingCard: {
    flex: 1,
    minWidth: 320,
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 32,
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    borderWidth: 2,
    borderColor: '#e9ecef',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  popularCard: {
    borderColor: '#2c5f2d',
    transform: [{ scale: 1.05 }],
    '@media (max-width: 768px)': {
      transform: [{ scale: 1 }],
    },
  },
  popularBadge: {
    position: 'absolute',
    top: -12,
    left: '50%',
    transform: [{ translateX: '-50%' }],
    backgroundColor: '#2c5f2d',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  popularBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  planTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c5f2d',
    marginBottom: 16,
    textAlign: 'center',
  },
  priceContainer: {
    marginBottom: 24,
    textAlign: 'center',
  },
  price: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
  },
  period: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  featuresList: {
    gap: 12,
    marginBottom: 24,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  featureBullet: {
    fontSize: 18,
    color: '#2c5f2d',
    fontWeight: 'bold',
  },
  featureText: {
    fontSize: 15,
    color: '#555',
    flex: 1,
    lineHeight: 22,
  },
  selectButton: {
    backgroundColor: '#2c5f2d',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 6,
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#234d24',
    },
  },
  selectButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  rentalGrid: {
    flexDirection: 'row',
    gap: 24,
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 32,
  },
  rentalCard: {
    flex: 1,
    minWidth: 250,
    maxWidth: 350,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 24,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  rentalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c5f2d',
    marginBottom: 12,
  },
  rentalPriceContainer: {
    marginBottom: 12,
  },
  rentalPrice: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
  rentalPeriod: {
    fontSize: 14,
    color: '#666',
  },
  rentalDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  rentalNote: {
    marginTop: 24,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: '#dee2e6',
  },
  rentalNoteText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    fontStyle: 'italic',
  },
  servicesTable: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  serviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 8,
    },
  },
  serviceRowAlt: {
    backgroundColor: '#f8f9fa',
  },
  serviceName: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  servicePrice: {
    fontSize: 16,
    color: '#2c5f2d',
    fontWeight: 'bold',
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

export default Pricing;
