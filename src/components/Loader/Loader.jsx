import { useReducedMotion } from 'framer-motion';
import { forwardRef } from 'react';
import { Text } from '~/components/Text';
import { classes, cssProps } from '~/utils/style';
import styles from './loader.module.css';

export const Loader = forwardRef(
  (
    { className, style, width = 32, height = 4, text = 'Loading...', center, ...rest },
    ref
  ) => {
    const reduceMotion = useReducedMotion();

    if (reduceMotion) {
      return (
        <Text className={classes(styles.text, className)} weight="medium" {...rest}>
          {text}
        </Text>
      );
    }

    return (
      <div
        ref={ref}
        className={classes(styles.loader, className)}
        data-center={center}
        style={cssProps({ width, height }, style)}
        {...rest}
      >
        <div className={styles.span} />
      </div>
    );
  }
);