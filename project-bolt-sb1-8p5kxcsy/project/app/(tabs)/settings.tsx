import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { Globe, Volume2, Shield, CircleHelp as HelpCircle, Info, ChevronRight } from 'lucide-react-native';

export default function SettingsScreen() {
  const [voiceGuidance, setVoiceGuidance] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [offlineMode, setOfflineMode] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>सेटिंग्स</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Language & Accessibility</Text>
        
        <TouchableOpacity style={styles.settingRow}>
          <Globe size={20} color="#2563EB" />
          <Text style={styles.settingLabel}>App Language</Text>
          <Text style={styles.settingValue}>Hindi</Text>
          <ChevronRight size={16} color="#94A3B8" />
        </TouchableOpacity>

        <View style={styles.settingRow}>
          <Volume2 size={20} color="#2563EB" />
          <Text style={styles.settingLabel}>Voice Guidance</Text>
          <Switch
            value={voiceGuidance}
            onValueChange={setVoiceGuidance}
            trackColor={{ false: '#E2E8F0', true: '#93C5FD' }}
            thumbColor={voiceGuidance ? '#2563EB' : '#F1F5F9'}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Data & Storage</Text>
        
        <View style={styles.settingRow}>
          <Shield size={20} color="#16A34A" />
          <Text style={styles.settingLabel}>Offline Mode</Text>
          <Switch
            value={offlineMode}
            onValueChange={setOfflineMode}
            trackColor={{ false: '#E2E8F0', true: '#86EFAC' }}
            thumbColor={offlineMode ? '#16A34A' : '#F1F5F9'}
          />
        </View>

        <TouchableOpacity style={styles.settingRow}>
          <Shield size={20} color="#F97316" />
          <Text style={styles.settingLabel}>Data Usage</Text>
          <Text style={styles.settingValue}>Low</Text>
          <ChevronRight size={16} color="#94A3B8" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        
        <TouchableOpacity style={styles.settingRow}>
          <HelpCircle size={20} color="#64748B" />
          <Text style={styles.settingLabel}>Help Center</Text>
          <ChevronRight size={16} color="#94A3B8" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingRow}>
          <Info size={20} color="#64748B" />
          <Text style={styles.settingLabel}>About App</Text>
          <ChevronRight size={16} color="#94A3B8" />
        </TouchableOpacity>
      </View>

      <View style={styles.trustSection}>
        <Text style={styles.trustTitle}>🛡️ Your Security</Text>
        <Text style={styles.trustText}>
          BharatKYC follows all government guidelines and uses bank-level security to protect your data.
        </Text>
        
        <View style={styles.trustBadges}>
          <View style={styles.trustBadge}>
            <Text style={styles.trustBadgeText}>UIDAI Compliant</Text>
          </View>
          <View style={styles.trustBadge}>
            <Text style={styles.trustBadgeText}>RBI Approved</Text>
          </View>
          <View style={styles.trustBadge}>
            <Text style={styles.trustBadgeText}>ISO 27001</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#64748B',
  },
  section: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 24,
    marginBottom: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    gap: 12,
  },
  settingLabel: {
    fontSize: 16,
    color: '#1E293B',
    flex: 1,
  },
  settingValue: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
  },
  trustSection: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 24,
    marginBottom: 32,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  trustTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 12,
  },
  trustText: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
    marginBottom: 16,
  },
  trustBadges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  trustBadge: {
    backgroundColor: '#F0FDF4',
    borderColor: '#16A34A',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  trustBadgeText: {
    fontSize: 12,
    color: '#16A34A',
    fontWeight: '600',
  },
});