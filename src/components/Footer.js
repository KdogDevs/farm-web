import React from 'react';
import { View, Text, StyleSheet } from 'react-native-web';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <View style={styles.footer}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.title}>Contact Information</Text>
            <Text style={styles.text}>Phone: (555) 123-4567</Text>
            <Text style={styles.text}>Email: info@farmequestrian.com</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Hours</Text>
            <Text style={styles.text}>Monday - Friday: 7:00 AM - 7:00 PM</Text>
            <Text style={styles.text}>Saturday - Sunday: 8:00 AM - 6:00 PM</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Location</Text>
            <Text style={styles.text}>123 Farm Road</Text>
            <Text style={styles.text}>Rural County, State 12345</Text>
          </View>
        </View>
        <View style={styles.copyright}>
          <Text style={styles.copyrightText}>
            © {currentYear} Farm & Equestrian. All rights reserved.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#1a3a1b',
    paddingVertical: 40,
    marginTop: 60,
  },
  container: {
    maxWidth: 1200,
    marginHorizontal: 'auto',
    width: '100%',
    paddingHorizontal: 20,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 32,
    marginBottom: 32,
  },
  section: {
    flex: 1,
    minWidth: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  text: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 8,
    lineHeight: 20,
  },
  copyright: {
    borderTopWidth: 1,
    borderTopColor: '#2c5f2d',
    paddingTop: 20,
    alignItems: 'center',
  },
  copyrightText: {
    fontSize: 14,
    color: '#999',
  },
});

export default Footer;
