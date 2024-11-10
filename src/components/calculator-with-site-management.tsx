'use client'

import React, { useState, useCallback, useEffect } from 'react'
import { Plus, Trash2, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react'
import {
  type ErrorKeys, type Errors, type CreditRow, type CreditPayeeRow, type DepenseRow,
  type RetraitRow, type RowField, type VoiceLanguage, type Form, type Site
} from '@/types/calculator'

import { 
  VoiceInputButton, 
  LanguageSelector, 
  SiteCarousel,
  SITE_COLORS 
} from '@/components/calculator/shared'

import { MESSAGES } from '@/constants/calculator'