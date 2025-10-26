import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native-web';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/facilities', label: 'Facilities' },
    { path: '/services', label: 'Services' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <View style={styles.headerContent}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Text style={styles.logo}>Farm & Equestrian</Text>
          </Link>

          {/* Mobile menu button */}
          <Pressable
            style={styles.menuButton}
            onPress={toggleMenu}
            accessibilityLabel="Toggle menu"
          >
            <View style={styles.menuIcon}>
              <View style={styles.menuLine} />
              <View style={styles.menuLine} />
              <View style={styles.menuLine} />
            </View>
          </Pressable>

          {/* Desktop navigation */}
          <View style={styles.desktopNav}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{ textDecoration: 'none' }}
              >
                <Text
                  style={[
                    styles.navLink,
                    location.pathname === item.path && styles.activeLink,
                  ]}
                >
                  {item.label}
                </Text>
              </Link>
            ))}
          </View>
        </View>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <View style={styles.mobileNav}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{ textDecoration: 'none' }}
                onClick={() => setIsMenuOpen(false)}
              >
                <Text
                  style={[
                    styles.mobileNavLink,
                    location.pathname === item.path && styles.activeMobileLink,
                  ]}
                >
                  {item.label}
                </Text>
              </Link>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2c5f2d',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  container: {
    maxWidth: 1200,
    marginHorizontal: 'auto',
    width: '100%',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  menuButton: {
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'flex',
    },
  },
  menuIcon: {
    width: 30,
    gap: 6,
  },
  menuLine: {
    height: 3,
    backgroundColor: '#fff',
    borderRadius: 2,
  },
  desktopNav: {
    flexDirection: 'row',
    gap: 32,
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  navLink: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    paddingVertical: 8,
    paddingHorizontal: 4,
    transition: 'color 0.2s',
    ':hover': {
      color: '#a8d5a8',
    },
  },
  activeLink: {
    color: '#a8d5a8',
    borderBottomWidth: 2,
    borderBottomColor: '#a8d5a8',
  },
  mobileNav: {
    paddingHorizontal: 20,
    paddingBottom: 16,
    gap: 8,
    '@media (min-width: 769px)': {
      display: 'none',
    },
  },
  mobileNavLink: {
    color: '#fff',
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  activeMobileLink: {
    color: '#a8d5a8',
    fontWeight: 'bold',
  },
});

export default Navigation;
