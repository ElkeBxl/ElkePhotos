import { InjectionToken } from '@angular/core';
import { IPhotoRepository } from './photo.repository';

export const PHOTO_REPOSITORY_TOKEN = new InjectionToken<IPhotoRepository>('photo.repository');
