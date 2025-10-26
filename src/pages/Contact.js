import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native-web';

const Contact = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Contact Us</Text>
          <Text style={styles.headerSubtitle}>
            Get in touch to schedule a visit or ask about our services
          </Text>
        </View>
      </View>

      {/* Contact Info Section */}
      <View style={styles.section}>
        <View style={styles.sectionContainer}>
          <View style={styles.contactGrid}>
            <View style={styles.contactCard}>
              <View style={styles.contactIcon}>
                <Text style={styles.contactIconText}>📞</Text>
              </View>
              <Text style={styles.contactTitle}>Phone</Text>
              <Text style={styles.contactText}>(555) 123-4567</Text>
              <Text style={styles.contactSubtext}>Monday - Sunday, 7 AM - 7 PM</Text>
            </View>

            <View style={styles.contactCard}>
              <View style={styles.contactIcon}>
                <Text style={styles.contactIconText}>✉️</Text>
              </View>
              <Text style={styles.contactTitle}>Email</Text>
              <Text style={styles.contactText}>info@farmequestrian.com</Text>
              <Text style={styles.contactSubtext}>We'll respond within 24 hours</Text>
            </View>

            <View style={styles.contactCard}>
              <View style={styles.contactIcon}>
                <Text style={styles.contactIconText}>📍</Text>
              </View>
              <Text style={styles.contactTitle}>Location</Text>
              <Text style={styles.contactText}>123 Farm Road</Text>
              <Text style={styles.contactSubtext}>Rural County, State 12345</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Calendly Section */}
      <View style={styles.calendlySection}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Schedule a Visit</Text>
          <Text style={styles.sectionSubtitle}>
            Book a tour of our facility and see what we have to offer
          </Text>
          
          {/* Calendly Embed */}
          <View style={styles.calendlyContainer}>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/your-calendly-link?hide_event_type_details=1&hide_gdpr_banner=1"
              style={{
                minWidth: '320px',
                height: '700px',
              }}
            />
            <View style={styles.calendlyPlaceholder}>
              <Text style={styles.placeholderTitle}>Calendly Scheduling Widget</Text>
              <Text style={styles.placeholderText}>
                Replace the data-url above with your actual Calendly link
              </Text>
              <Text style={styles.placeholderInstructions}>
                Example: https://calendly.com/your-username/facility-tour
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Hours Section */}
      <View style={styles.hoursSection}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Hours of Operation</Text>
          <View style={styles.hoursGrid}>
            <View style={styles.hoursCard}>
              <Text style={styles.hoursDay}>Monday - Friday</Text>
              <Text style={styles.hoursTime}>7:00 AM - 7:00 PM</Text>
            </View>
            <View style={styles.hoursCard}>
              <Text style={styles.hoursDay}>Saturday - Sunday</Text>
              <Text style={styles.hoursTime}>8:00 AM - 6:00 PM</Text>
            </View>
          </View>
          <View style={styles.hoursNote}>
            <Text style={styles.hoursNoteText}>
              * Tours available by appointment only. Please schedule in advance.
            </Text>
          </View>
        </View>
      </View>

      {/* FAQ Section */}
      <View style={styles.faqSection}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
          <View style={styles.faqList}>
            <View style={styles.faqItem}>
              <Text style={styles.faqQuestion}>Do I need an appointment to visit?</Text>
              <Text style={styles.faqAnswer}>
                Yes, we require appointments for all tours to ensure we can give you our full attention and answer all your questions.
              </Text>
            </View>
            <View style={styles.faqItem}>
              <Text style={styles.faqQuestion}>What should I bring to a tour?</Text>
              <Text style={styles.faqAnswer}>
                Just yourself! We'll show you around the facility and answer any questions you have about our services.
              </Text>
            </View>
            <View style={styles.faqItem}>
              <Text style={styles.faqQuestion}>Can I bring my horse for a trial stay?</Text>
              <Text style={styles.faqAnswer}>
                Absolutely! We offer trial boarding periods. Contact us to discuss availability and schedule.
              </Text>
            </View>
            <View style={styles.faqItem}>
              <Text style={styles.faqQuestion}>How far in advance should I book arena rental?</Text>
              <Text style={styles.faqAnswer}>
                We recommend booking at least one week in advance, especially for weekends. Last-minute availability may be possible.
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Map Placeholder */}
      <View style={styles.mapSection}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Find Us</Text>
          <View style={styles.mapPlaceholder}>
            <Text style={styles.mapPlaceholderText}>Map Location</Text>
            <Text style={styles.mapPlaceholderSubtext}>
              Add your Google Maps embed code here
            </Text>
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
  sectionTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2c5f2d',
    marginBottom: 16,
    textAlign: 'center',
    '@media (max-width: 768px)': {
      fontSize: 28,
    },
  },
  sectionSubtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  contactGrid: {
    flexDirection: 'row',
    gap: 32,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  contactCard: {
    flex: 1,
    minWidth: 250,
    maxWidth: 350,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 32,
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  contactIcon: {
    marginBottom: 16,
  },
  contactIconText: {
    fontSize: 48,
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c5f2d',
    marginBottom: 8,
  },
  contactText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  contactSubtext: {
    fontSize: 14,
    color: '#666',
  },
  calendlySection: {
    backgroundColor: '#f8f9fa',
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  calendlyContainer: {
    position: 'relative',
    maxWidth: 900,
    marginHorizontal: 'auto',
  },
  calendlyPlaceholder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#2c5f2d',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    textAlign: 'center',
  },
  placeholderTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c5f2d',
    marginBottom: 16,
  },
  placeholderText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
  },
  placeholderInstructions: {
    fontSize: 14,
    color: '#999',
    fontFamily: 'monospace',
  },
  hoursSection: {
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  hoursGrid: {
    flexDirection: 'row',
    gap: 24,
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 24,
  },
  hoursCard: {
    flex: 1,
    minWidth: 280,
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 24,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  hoursDay: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c5f2d',
    marginBottom: 8,
  },
  hoursTime: {
    fontSize: 20,
    color: '#333',
  },
  hoursNote: {
    textAlign: 'center',
  },
  hoursNoteText: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  faqSection: {
    backgroundColor: '#f8f9fa',
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  faqList: {
    gap: 24,
    maxWidth: 800,
    marginHorizontal: 'auto',
  },
  faqItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 24,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  faqQuestion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c5f2d',
    marginBottom: 12,
  },
  faqAnswer: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  mapSection: {
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  mapPlaceholder: {
    height: 400,
    backgroundColor: '#e9ecef',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#dee2e6',
    borderStyle: 'dashed',
  },
  mapPlaceholderText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6c757d',
    marginBottom: 8,
  },
  mapPlaceholderSubtext: {
    fontSize: 14,
    color: '#999',
  },
});

export default Contact;
