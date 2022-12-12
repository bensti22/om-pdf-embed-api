<?php

namespace Drupal\om_pdf_embed_api\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides an example block.
 *
 * @Block(
 *   id = "om_pdf_embed_api_example",
 *   admin_label = @Translation("Example"),
 *   category = @Translation("OM PDF Embed API")
 * )
 */
class ExampleBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build['content'] = [
      '#markup' => $this->t('It works!'),
    ];
    return $build;
  }

}
