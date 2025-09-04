import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { ExternalLink, Globe, ArrowRight } from 'lucide-react-native';

interface WebRedirectProps {
  url: string;
  title: string;
  description: string;
  onClose?: () => void;
}

export default function WebRedirect({ url, title, description, onClose }: WebRedirectProps) {
  const handleOpenWeb = () => {
    Linking.openURL(url);
    onClose?.();
  };

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.header}>
          <Globe size={32} color="#2563EB" />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>

        <View style={styles.urlContainer}>
          <Text style={styles.urlLabel}>Opening:</Text>
          <Text style={styles.url}>{url}</Text>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.openButton} onPress={handleOpenWeb}>
            <ExternalLink size={20} color="#FFFFFF" />
            <Text style={styles.openButtonText}>Open in Browser</Text>
            <ArrowRight size={16} color="#FFFFFF" />
          </TouchableOpacity>

          {onClose && (
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 24,
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
    marginTop: 12,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 18,
  },
  urlContainer: {
    backgroundColor: '#F1F5F9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 24,
  },
  urlLabel: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 4,
  },
  url: {
    fontSize: 14,
    color: '#2563EB',
    fontWeight: '600',
  },
  buttons: {
    gap: 12,
  },
  openButton: {
    backgroundColor: '#2563EB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  openButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  cancelButton: {
    backgroundColor: '#F1F5F9',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#64748B',
    fontSize: 14,
    fontWeight: '600',
  },
});