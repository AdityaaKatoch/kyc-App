import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { MessageCircle, X } from 'lucide-react-native';

interface FloatingChatbotProps {
  onOpen: () => void;
}

export default function FloatingChatbot({ onOpen }: FloatingChatbotProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [pulseAnim] = useState(new Animated.Value(1));

  React.useEffect(() => {
    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );
    pulseAnimation.start();

    return () => pulseAnimation.stop();
  }, []);

  if (!isVisible) return null;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.helpText}>
        <Text style={styles.helpTextContent}>Need help? / मदद चाहिए?</Text>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setIsVisible(false)}
        >
          <X size={16} color="#64748B" />
        </TouchableOpacity>
      </TouchableOpacity>
      
      <Animated.View style={[styles.chatButton, { transform: [{ scale: pulseAnim }] }]}>
        <TouchableOpacity style={styles.chatButtonInner} onPress={onOpen}>
          <MessageCircle size={28} color="#FFFFFF" />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 100,
    right: 24,
    alignItems: 'flex-end',
    zIndex: 1000,
  },
  helpText: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
    maxWidth: 200,
    gap: 8,
  },
  helpTextContent: {
    fontSize: 14,
    color: '#1E293B',
    fontWeight: '600',
    flex: 1,
  },
  closeButton: {
    padding: 2,
  },
  chatButton: {
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  chatButtonInner: {
    width: 60,
    height: 60,
    backgroundColor: '#2563EB',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});