import { InjectionToken } from '@angular/core';
import { IPhotoService } from './photo.service';

export const PHOTO_SERVICE_TOKEN = new InjectionToken<IPhotoService>('photo.service');